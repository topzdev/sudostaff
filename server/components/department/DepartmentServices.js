const models = require("../models");
const helpers = require("./departmentHelpers");
const parseCondition = require("../../helpers/parseCondition");

class DepartmentServices {
  constructor() {}

  async getOne({ id }, { include, exclude, withDeptHead }) {
    const result = await models.Department.findAll({
      ...parseCondition({ limit: 1, include, exclude }),
      // include: withDeptHead ? helpers.tableJoin() : [],
      where: { id },
    });

    return {
      status: 200,
      msg: "Department fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({
    searchText,
    searchBy,
    limit,
    offset,
    include,
    exclude,
    withDeptHead,
  }) {
    const result = await models.Department.findAndCountAll({
      ...parseCondition({
        searchText,
        searchBy,
        limit,
        offset,
        include,
        exclude,
      }),
      // include: withDeptHead ? helpers.tableJoin() : [],
    });
    return {
      status: 200,
      msg: "Departments fetch successfully",
      data: result,
    };
  }

  async create({ name, description, employeeId }) {
    if (await helpers.isExist({ name }))
      return {
        status: 500,
        msg: "Department name is already exist",
      };

    const result = await models.Department.create({ name, description });

    // const head = await models.DepartmentHead.create({
    //   departmentId: result.id,
    //   employeeId,
    // });

    return {
      status: 200,
      msg: "Department added succesfully",
      data: result.id,
    };
  }

  async update(departmentInfo) {
    const id = departmentInfo.id;
    delete departmentInfo.id;

    const result = await models.Department.update(departmentInfo, {
      where: { id },
    });

    return {
      status: 200,
      msg: "Department Updated Successfully",
      data: result[0] ? true : false,
    };
  }

  async delete({ id }) {
    if (!(await helpers.isExist({ name })))
      return {
        status: 500,
        msg: "Department is not exist",
      };

    // const departmentHead = await models.DepartmentHead.destroy({
    //   departmentId: id,
    // });

    const result = await models.Department.destroy({ where: { id } });

    console.log(departmentHead, result);

    return {
      status: 200,
      msg: "Department Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DepartmentServices();
