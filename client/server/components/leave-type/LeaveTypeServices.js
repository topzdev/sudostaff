const LeaveTypeModel = require("./LeaveTypeModel");
const helpers = require("./leaveTypeHelpers");

class LeaveTypeServices {
  async getOne({ id }) {
    const result = await LeaveTypeModel.findAll({ where: { id }, limit: 1 });
    return {
      status: 200,
      msg: "Leave Type fetch successfully",
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

    const result = await LeaveTypeModel.findAll(options);
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

    const result = await LeaveTypeModel.create({ name, description });

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

    const result = await LeaveTypeModel.update(
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

    const result = await LeaveTypeModel.destroy({ where: { id } });
    return {
      status: 200,
      msg: "Leave type deleted successfully",
      data: result,
    };
  }
}

module.exports = new LeaveTypeServices();
