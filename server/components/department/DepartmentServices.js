const DepartmentModel = require("./DepartmentModel");
const deparmentHelpers = require("./departmentHelpers");

class DepartmentServices {
  async getOne({ id }) {
    const result = await DepartmentModel.findAll({ where: { id }, limit: 1 });
    return {
      status: 200,
      msg: "Department fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({ search, limit, offset }) {
    const result = await DepartmentModel.findAll(
      deparmentHelpers.parseCondition({ search, limit, offset })
    );
    return {
      status: 200,
      msg: "Departments fetch successfully",
      data: result,
    };
  }

  async create({ name }) {
    if (await deparmentHelpers.isExist({ name }))
      return {
        status: 500,
        msg: "Department name is already exist",
      };

    const result = await DepartmentModel.create(
      { name },
      { returning: ["id"] }
    );

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

    const result = await DepartmentModel.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Department Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DepartmentServices();
