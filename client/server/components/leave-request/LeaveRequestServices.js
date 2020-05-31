const LeaveRequestModel = require("./LeaveRequestModel");
const helpers = require("./leaveRequestHelpers");

class LeaveRequestServices {
  async getOne({ id }) {
    const result = await LeaveRequestModel.findAll({ where: { id }, limit: 1 });
    return {
      status: 200,
      msg: "Leave Request fetch successfully",
      data: result.length ? result[0] : [],
    };
  }

  async getAll({ status, limit, offset }) {
    const options = {
      where: {},
      offset,
      limit,
    };

    if (status) options.where.status = status;

    const result = await LeaveRequestModel.findAll(options);
    return {
      status: 200,
      msg: "Leave Requests fetch successfully",
      data: result,
    };
  }

  async create({ employeeId, startDate, endDate, leaveType, reason }) {
    if (await helpers.isActive())
      return {
        status: 400,
        msg: "Your account is currently active in leave application",
      };

    const result = await LeaveRequestModel.create({
      employeeId,
      startDate,
      endDate,
      leaveType,
      reason,
    });

    return {
      status: 200,
      msg: "Your Leave Request Submitted Successfully",
      data: result.id,
    };
  }

  async updateByUser({ id, startDate, endDate, leaveType, reason }) {
    console.log(id);

    if (!(await helpers.isExist(id)))
      return {
        status: 400,
        msg: "leave application is not exist",
      };

    const result = await LeaveRequestModel.update(
      { startDate, endDate, leaveType, reason },
      { where: { id } }
    );

    return {
      status: 200,
      msg: "Your Leave Request Updated Successfully",
      data: result,
    };
  }

  async updateByAdmin({
    id,
    requestStatus,
    authorizedComment,
    authorizedPersonId,
  }) {
    if (!(await helpers.isExist(id)))
      return {
        status: 400,
        msg: "leave application is not exist",
      };

    if (!helpers.isActive())
      return {
        status: 400,
        msg: "This request is already marked as rejected/authorized",
      };

    const result = await LeaveRequestModel.update(
      { requestStatus, authorizedComment, authorizedPersonId },
      { where: { id } }
    );

    return {
      status: 200,
      msg: "Your Leave Request Updated Successfully",
      data: result,
    };
  }
}

module.exports = new LeaveRequestServices();
