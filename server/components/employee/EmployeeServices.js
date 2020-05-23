const EmployeeModel = require("./EmployeeModel");
const helper = require("./employeeHelpers");
const imageServices = require("../image/ImageServices");

class EmployeeServices {
  async getOne({ id }) {
    const result = await EmployeeModel.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: { id },
    });
    console.log(result);
    return {
      status: 200,
      msg: "Employee fetch successfully",
      data: result,
    };
  }

  async getAll({ search, limit, offset }) {
    const result = await EmployeeModel.findAll(
      helper.parseCondition({ search, limit, offset })
    );
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
      benifitsId,
      familyDetailsId,
      addressId,
      governmentIssuedId,
      designationId,
    },
    rawImage
  ) {
    const imageId = null;

    if (await helper.isExist(id))
      return {
        status: 400,
        msg: "Employee ID is already exist",
      };

    if (rawImage["profile"]) {
      const uploaded = await imageServices.create(rawImage["profile"]);

      /*Check if the status is not equal to 200 its means that uploading is failed and if not procede*/
      if (uploaded.status !== 200) return uploaded;

      /* if the uploading image is successfull then assign the id of upload image to imageId */
      imageId = uploaded.data;
    }

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
        imageId,
      },
      { returning: ["id"] }
    );

    return {
      status: 200,
      msg: "Employee Successfully Added",
      data: {
        id: result.id,
        imageId,
      },
    };
  }

  async update(employeeInfo, rawImage) {
    const imageId = null;
    const id = employeeInfo.id;
    delete employeeInfo.id;

    if (rawImage["profile"]) {
      const uploaded = await imageServices.update({
        imageId: employeeInfo.imageId,
        rawImage: rawImage["profile"],
      });

      /*Check if the status is not equal to 200 its means that uploading is failed and if not procede*/
      if (uploaded.status !== 200) return uploaded;

      /* if the uploading image is successfull then assign the id of upload image to employeeInfo.imageId */
      imageId = uploaded.data;
    }

    const result = await EmployeeModel.update(
      { ...employeeInfo, imageId },
      {
        where: { id },
      }
    );

    return {
      status: 200,
      msg: "Employee Successfully Updated",
      data: {
        id,
        imageId,
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
