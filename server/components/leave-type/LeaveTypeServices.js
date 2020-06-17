const models = require("../models");
const helpers = require("./leaveTypeHelpers");
const parseCondition = require("../../helpers/parseCondition");

class LeaveTypeServices {
  async getOne({ id }, { include, exclude }) {
    const result = await models.LeaveType.findAll({
      ...parseCondition({ limit: 1, include, exclude }),
      where: { id },
    });

    return {
      status: 200,
      msg: "Leave Type fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({ include, exclude, limit, offset }) {
    const result = await models.LeaveType.findAndCountAll({
      ...parseCondition({
        include,
        exclude,
        limit,
        offset,
      }),
    });
    return {
      status: 200,
      msg: "Leave Types fetch successfully",
      data: result,
    };
  }

  async create({ name, description }) {
    if (helpers.isExist(name))
      return {
        status: 500,
        msg: "Leave type is already exist",
      };

    const result = await models.LeaveType.create({ name, description });

    return {
      status: 200,
      msg: "Leave type added successfully",
      data: result,
    };
  }

  async update({ id, name, description }) {
    if (!(await helpers.isExist({ id })))
      return {
        status: 500,
        msg: "Leave type is not exist",
      };

    const result = await models.LeaveType.update(
      { name, description },
      { where: { id } }
    );

    return {
      status: 200,
      msg: "Leave type updated successfully",
      data: result,
    };
  }

  async delete({ id }) {
    if (!(await this.isExist({ id })))
      return {
        status: 500,
        msg: "Leave type is not exist",
      };

    const result = await models.LeaveType.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Leave type deleted successfully",
      data: result,
    };
  }
}

module.exports = new LeaveTypeServices();
