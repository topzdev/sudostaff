const LeaveRequestModel = require("./LeaveRequestModel");
const helpers = require("./leaveRequestHelpers");
const parseCondition = require("../../helpers/parseCondition");

class LeaveRequestServices {
  async getOne({ id }, { include, exclude }) {
    const result = await LeaveRequestModel.findByPk(id, {
      ...parseCondition({ limit: 1, include, exclude }),
    });

    return {
      status: 200,
      msg: "Leave Request fetch successfully",
      data: result,
    };
  }

  async getAll({ status, limit, offset, include, exclude }) {
    const result = await LeaveRequestModel.findAndCountAll({
      ...parseCondition({ limit: 1, include, exclude, status }),
    });
    return {
      status: 200,
      msg: "Leave Requests fetch successfully",
      data: result,
    };
  }

  async create({ employeeId, startDate, endDate, leaveTypeId, reason }) {
    if (await helpers.isActive())
      return {
        status: 400,
        msg: "Your account is currently active in leave application",
      };

    const result = await LeaveRequestModel.create({
      employeeId,
      startDate,
      endDate,
      leaveTypeId,
      reason,
    });

    return {
      status: 200,
      msg: "Your Leave Request Submitted Successfully",
      data: result.id,
    };
  }

  async updateByUser({ id, startDate, endDate, leaveTypeId, reason }) {
    console.log(id);

    if (!(await helpers.isExist(id)))
      return {
        status: 400,
        msg: "leave application is not exist",
      };

    const result = await LeaveRequestModel.update(
      { startDate, endDate, leaveTypeId, reason },
      { where: { id } }
    );

    return {
      status: 200,
      msg: "Your Leave Request Updated Successfully",
      data: result,
    };
  }

  async updateByAdmin({ id, status, authorizedComment, authorizedPersonId }) {
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
      { status, authorizedComment, authorizedPersonId },
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
