const DepartmentModel = require("./DepartmentModel");
const deparmentHelpers = require("./departmentHelpers");
const DeparmentHeadModel = require("./DepartmentHeadModel");
const EmployeeModel = require("../employee/EmployeeModel");

const include = [
  {
    model: DeparmentHeadModel,
    attributes: ["id", "employeeId"],
    include: [
      {
        model: EmployeeModel,
        attributes: ["firstName", "lastName", "fullName"],
      },
    ],
  },
];

class DepartmentServices {
  async getOne({ id }) {
    const result = await DepartmentModel.findAll({
      where: { id },
      limit: 1,
      include,
    });

    return {
      status: 200,
      msg: "Department fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({ search, limit, offset }) {
    const result = await DepartmentModel.findAndCountAll({
      ...deparmentHelpers.parseCondition({ search, limit, offset }),
      include,
    });
    return {
      status: 200,
      msg: "Departments fetch successfully",
      data: result,
    };
  }

  async create({ name, description, employeeId }) {
    if (await deparmentHelpers.isExist({ name }))
      return {
        status: 500,
        msg: "Department name is already exist",
      };

    const result = await DepartmentModel.create({ name, description });

    const head = await DeparmentHeadModel.create({
      departmentId: result.id,
      employeeId,
    });

    return {
      status: 200,
      msg: "Department added succesfully",
      data: result.id,
    };
  }

  async update(departmentInfo) {
    const id = departmentInfo.id;
    delete departmentInfo.id;

    const result = await DepartmentModel.update(departmentInfo, {
      where: { id },
    });

    const departmentHead = await DeparmentHeadModel.update(
      { employeeId: departmentInfo.employeeId },
      {
        where: { departmentId: id },
      }
    );

    console.log(departmentHead);

    return {
      status: 200,
      msg: "Department Updated Successfully",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    if (!(await deparmentHelpers.isExist({ name })))
      return {
        status: 500,
        msg: "Department is not exist",
      };

    const departmentHead = await DeparmentHeadModel.destroy({
      departmentId: id,
    });

    const result = await DepartmentModel.destroy({ where: { id } });

    console.log(departmentHead, result);

    return {
      status: 200,
      msg: "Department Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DepartmentServices();
