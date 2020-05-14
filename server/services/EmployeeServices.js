const EmployeeModel = require("../models/EmployeeModel");
const ContactModel = require("../models/ContactModel");

class EmployeeServices {
  async isExist(id) {
    const count = await EmployeeModel.count({
      where: { id: employeeInfo.id },
    });

    return count ? true : false;
  }

  async create({
    id,
    firstname,
    middlename,
    lastname,
    birthdate,
    birthplace,
    contact,
    designation,
    citizenship,
    gender,
    maritalStatus,
    joiningDate,
  }) {
    if (await isExist(employeeInfo.id))
      return {
        status: "500",
        msg: "Employee ID is already exist",
      };

    const result = await EmployeeModel.create({
      id,
      firstname,
      middlename,
      lastname,
      birthdate,
      birthplace,
      contact,
      designation,
      citizenship,
      gender,
      maritalStatus,
      joiningDate,
    });
    console.log(result);
    return {
      status: "200",
      msg: "Employee Successfully Added",
      data: result,
    };
  }
}

module.exports = new EmployeeServices();
