const EmployeeModel = require("./EmployeeModel");
const helper = require("./employeeHelpers");

class EmployeeServices {
  async getOne({ id }) {
    const result = await EmployeeModel.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt", "isRemoved"],
      },
      where: { id, isRemoved: false },
    });
    console.log(result);
    return {
      status: "200",
      msg: "Employee fetch successfully",
      data: result,
    };
  }

  async getAll({ search, limit, offset }) {
    const options = {
      where: {},
      offset,
      limit,
    };

    if (search) options.where.name = { [Op.like]: `%${search}%` };

    const result = await EmployeeModel.findAll(options);
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
    birthDate,
    maritalStatus,
    joiningDate,
    birthPlace,
    citizenship,
    city,
    country,
    province,
    addressLine1,
    addressLine2,
    postalCode,
    emailAddress,
    landline,
    mobile,
    gender,
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
        birthDate,
        maritalStatus,
        joiningDate,
        birthPlace,
        citizenship,
        city,
        country,
        province,
        addressLine1,
        addressLine2,
        postalCode,
        emailAddress,
        landline,
        mobile,
        gender,
        designationId,
      },
      { returning: ["id"] }
    );
    return {
      status: "200",
      msg: "Employee Successfully Added",
      data: result,
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
      data: result,
    };
  }

  async remove({ id }) {
    console.log(id);
    if (!(await helper.isExist(id)))
      return {
        status: "500",
        msg: "Employee is not exist",
      };

    const result = await EmployeeModel.update(
      { isRemoved: true },
      { where: { id } }
    );

    return {
      status: "200",
      msg:
        "Employee Remove Temporarily, Only Administrator can only delete this data",
      data: result,
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
