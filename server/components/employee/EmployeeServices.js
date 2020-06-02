const EmployeeModel = require("./EmployeeModel");
const helper = require("./employeeHelpers");
const imageServices = require("../photo/PhotoServices");
const benifitsServices = require("../benifits/BenifitsServices");
const addressServices = require("../address/AddressServices");
const familyDetailsServices = require("../family-details/FamilyDetailsServices");
const governmentIssued = require("../government-ids/GovernmentIdsServices");
const parseCondition = require("../../helpers/parseCondition");

class EmployeeServices {
  constructor() {}

  async getOne({ id }, { include, exclude, withPhoto, withDesignation }) {
    const result = await EmployeeModel.findByPk(id, {
      ...parseCondition({ include, exclude }),
      include: helper.joinTable({ withPhoto, withDesignation }),
    });
    console.log(result);
    return {
      status: 200,
      msg: "Employee fetch successfully",
      data: result,
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
    const result = await EmployeeModel.findAndCountAll({
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
    rawImage
  ) {
    let photoId = null;

    if (await helper.isExist(id))
      return {
        status: 400,
        msg: "Employee ID is already exist",
      };

    if (rawImage["photo"]) {
      const uploaded = await imageServices.create(rawImage["photo"]);

      /*Check if the status is not equal to 200 its means that uploading is failed and if not procede*/
      if (uploaded.status !== 200) return uploaded;

      /* if the uploading image is successfull then assign the id of upload image to photoId */
      photoId = uploaded.data;
    }

    // Create blanks model and get the id
    const benifitsId = await benifitsServices.create({});
    const familyDetailsId = await familyDetailsServices.create({});
    const addressId = await addressServices.create({});
    const governmentIssuedId = await governmentIssued.create({});

    const result = await EmployeeModel.create(
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

    return {
      status: 200,
      msg: "Employee Successfully Added",
      data: {
        id: result.id,
        photoId,
      },
    };
  }

  async update(employeeInfo, rawImage) {
    const photoId = null;
    const id = employeeInfo.id;
    delete employeeInfo.id;

    if (rawImage["photo"]) {
      const uploaded = await imageServices.update({
        photoId: employeeInfo.photoId,
        rawImage: rawImage["photo"],
      });

      /*Check if the status is not equal to 200 its means that uploading is failed and if not procede*/
      if (uploaded.status !== 200) return uploaded;

      /* if the uploading image is successfull then assign the id of upload image to employeeInfo.photoId */
      photoId = uploaded.data;
    }

    const result = await EmployeeModel.update(
      { ...employeeInfo, photoId },
      {
        where: { id },
      }
    );

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

    const result = await EmployeeModel.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Employee Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new EmployeeServices();
