const DepartmentModel = require("../models/DepartmentModel");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
class DepartmentServices {
  async getOne({ id }) {
    const result = await DepartmentModel.findAll({ where: { id }, limit: 1 });
    return {
      status: "200",
      msg: "Designation fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({ search, limit, offset }) {
    const options = {
      where: {},
      offset,
      limit,
    };

    if (search) options.where.name = { [Op.like]: `%${search}%` };

    const result = await DepartmentModel.findAll(options);
    return {
      status: "200",
      msg: "Departments fetch successfully",
      data: result,
    };
  }
  async create({ name }) {
    const isExist = await DepartmentModel.findOne({ where: { name } });

    if (isExist)
      return {
        status: "500",
        msg: "Department name is already exist",
      };

    const result = await DepartmentModel.create(
      { name },
      { returning: ["id"] }
    );

    return {
      status: "200",
      msg: "Department added succesfully",
      data: result,
    };
  }

  async update({ id, name, isRemoved }) {
    const result = await DepartmentModel.update(
      { name, isRemoved },
      { where: { id } }
    );

    return {
      status: "200",
      msg: "Department Updated Successfully",
      data: result,
    };
  }

  async remove({ id }) {
    console.log(id);
    const isExist = await DepartmentModel.findOne({ where: { id } });
    if (!isExist)
      return {
        status: "500",
        msg: "Department is not exist",
      };

    const result = await DepartmentModel.update(
      { isRemoved: true },
      { where: { id } }
    );

    return {
      status: "200",
      msg:
        "Department Remove Temporarily, Only Administrator can delete this data",
      data: result,
    };
  }

  async delete({ id }) {
    console.log(id);
    const isExist = await DepartmentModel.findOne({ where: { id } });
    if (!isExist)
      return {
        status: "500",
        msg: "Department is not exist",
      };

    const result = await DepartmentModel.destroy({ where: { id } });
    return {
      status: "200",
      msg: "Department Deleted Permenanently",
      data: result,
    };
  }
}

module.exports = new DepartmentServices();
