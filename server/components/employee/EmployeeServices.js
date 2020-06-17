const models = require("../models");
const helper = require("./employeeHelpers");
const photServices = require("../photo/PhotoServices");
const benifitsServices = require("../benifits/BenifitsServices");
const addressServices = require("../address/AddressServices");
const familyDetailsServices = require("../family-details/FamilyDetailsServices");
const governmentIssued = require("../government-ids/GovernmentIdsServices");
const parseCondition = require("../../helpers/parseCondition");
const accountServices = require("../account/AccountServices");
class EmployeeServices {
  async getOne(
    { id },
    { include, exclude, withPhoto, withDesignation, withDeptHead }
  ) {
    const result = await models.Employee.findByPk(id, {
      ...parseCondition({ include, exclude }),
      include: helper.joinTable({ withPhoto, withDesignation, withDeptHead }),
      plain: true,
    });

    return {
      status: 200,
      msg: "Employee fetch successfully",
      data: helper.flatten(result.get({ plain: true })),
    };
  }

  async getAll({
    searchText,
    searchBy,
    limit,
    offset,
    include,
    exclude,
    withPhoto,
    withDesignation,
  }) {
    const result = await models.Employee.findAndCountAll({
      ...parseCondition({
        searchText,
        limit,
        offset,
        include,
        exclude,
        searchBy,
      }),
      include: helper.joinTable({ withPhoto, withDesignation }),
    });
    return {
      status: 200,
      msg: "Employees fetch successfully",
      data: result,
    };
  }

  async create(
    {
      id,
      firstName,
      lastName,
      middleName,
      extensionName,
      birthDate,
      birthPlace,
      citizenship,
      emailAddress,
      landline,
      mobile,
      bloodType,
      height,
      weight,
      civilStatus,
      joiningDate,
      gender,
      designationId,
    },
    rawPhoto
  ) {
    let photoId = null;

    if (await helper.isExist(id))
      return {
        status: 400,
        msg: "Employee ID is already exist",
      };

    const uploaded = await photServices.create(
      rawPhoto && rawPhoto["photo"] ? rawPhoto["photo"] : null
    );

    if (uploaded.status !== 200) return uploaded;

    photoId = uploaded.data;

    // Create blanks model and get the id
    const benifitsId = await benifitsServices.create({});
    const familyDetailsId = await familyDetailsServices.create({});
    const addressId = await addressServices.create({});
    const governmentIssuedId = await governmentIssued.create({});

    const result = await models.Employee.create(
      {
        id,
        firstName,
        lastName,
        middleName,
        extensionName,
        birthDate,
        birthPlace,
        citizenship,
        emailAddress,
        landline,
        mobile,
        bloodType,
        height,
        weight,
        civilStatus,
        joiningDate,
        gender,
        benifitsId,
        familyDetailsId,
        addressId,
        governmentIssuedId,
        designationId,
        photoId,
      },
      { returning: ["id"] }
    );
    // Create account
    await accountServices.create({ employeeId: id, birthDate, lastName });

    return {
      status: 200,
      msg: "Employee Successfully Added",
      data: {
        id: result.id,
        photoId,
      },
    };
  }

  async update(employeeInfo, rawPhoto) {
    let photoId = null;
    const id = employeeInfo.id;
    delete employeeInfo.id;

    const uploaded = await photServices.update({
      rawPhoto: rawPhoto && rawPhoto["photo"] ? rawPhoto["photo"] : null,
      photoId: employeeInfo.photoId,
    });

    /*Check if the status is not equal to 200 its means that uploading is failed and if not procede*/
    if (uploaded.status !== 200) return uploaded;

    /* if the uploading image is successfull then assign the id of upload image to employeeInfo.photoId */
    photoId = uploaded.data;

    const result = await models.Employee.update(
      { ...employeeInfo, photoId },
      {
        where: { id },
      }
    );

    console.log(result);

    return {
      status: 200,
      msg: "Employee Successfully Updated",
      data: {
        id,
        photoId,
      },
    };
  }

  async delete({ id }) {
    console.log(id);
    if (!(await helper.isExist(id)))
      return {
        status: 400,
        msg: "Employee is not exist",
      };

    const result = await models.Employee.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Employee Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new EmployeeServices();
