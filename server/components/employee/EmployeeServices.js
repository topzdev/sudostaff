const EmployeeModel = require("./EmployeeModel");
const helper = require("./employeeHelpers");

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
      status: "200",
      msg: "Employee fetch successfully",
      data: result,
    };
  }

  async getAll({ search, limit, offset }) {
    const result = await EmployeeModel.findAll(
      helper.parseCondition({ search, limit, offset })
    );
    return {
      status: "200",
      msg: "Employees fetch successfully",
      data: result,
    };
  }

  async create({
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
    isActive,
    benifitsId,
    familyDetailsId,
    addressId,
    governmentIssuedId,
    designationId,
  }) {
    if (await helper.isExist(id))
      return {
        status: "500",
        msg: "Employee ID is already exist",
      };

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
        isActive,
        benifitsId,
        familyDetailsId,
        addressId,
        governmentIssuedId,
        designationId,
      },
      { returning: ["id"] }
    );
    return {
      status: "200",
      msg: "Employee Successfully Added",
      data: result.id,
    };
  }

  async update(employeeInfo) {
    const id = employeeInfo.id;
    delete employeeInfo.id;
    const result = await EmployeeModel.update(employeeInfo, {
      where: { id },
    });

    console.log(result);
    return {
      status: "200",
      msg: "Employee Successfully Updated",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    console.log(id);
    if (!(await helper.isExist(id)))
      return {
        status: "500",
        msg: "Employee is not exist",
      };

    const result = await EmployeeModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Employee Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new EmployeeServices();
