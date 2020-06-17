const models = require("../models");
const helpers = require("./leaveRequestHelpers");
const parseCondition = require("../../helpers/parseCondition");

class LeaveRequestServices {
  async getOne({ id }, { include, exclude, withLeaveType, withEmployee }) {
    const result = await models.LeaveRequest.findByPk(id, {
      ...parseCondition({ include, exclude }),
      include: helpers.joinTable({ withLeaveType, withEmployee }),
    });

    return {
      status: 200,
      msg: "Leave Request fetch successfully",
      data: result,
    };
  }

  async upcoming({ id }, { include, exclude }) {
    const result = await models.LeaveRequest.findOne({
      ...parseCondition({ include, exclude }),
      ...helpers.upcomingOption(id),
    });

    return {
      status: 200,
      msg: "Upcoming Leave Request",
      data: result,
    };
  }

  async getSummaryEmployee({ id }) {
    const result = await helpers.summaryEmp(id);

    return {
      status: 200,
      msg: "Leave Summary fetch successfully",
      data: result,
    };
  }

  async getSummaryAdmin() {
    const result = await helpers.summaryAdmin();

    return {
      status: 200,
      msg: "Leave Summary fetch successfully [Admin]",
      data: result,
    };
  }

  async getAllByEmployee({ id }, { status, include, exclude, withLeaveType }) {
    const where = {};

    where.employeeId = id;

    if (status) where.status = status;

    const result = await models.LeaveRequest.findAndCountAll({
      ...parseCondition({ include, exclude, withLeaveType }),
      where,
      include: helpers.joinTable({ withLeaveType }),
      order: helpers.order,
    });

    return {
      status: 200,
      msg: "Leave Request fetch successfully",
      data: result,
    };
  }

  async getAll({
    status,
    searchBy,
    searchText,
    limit,
    offset,
    include,
    exclude,
    withLeaveType,
    withEmployee,
  }) {
    const result = await models.LeaveRequest.findAndCountAll({
      ...parseCondition({
        limit,
        offset,
        include,
        exclude,
        status,
        searchBy,
        searchText,
      }),
      include: helpers.joinTable({ withLeaveType, withEmployee }),
      order: helpers.order,
    });
    return {
      status: 200,
      msg: "Leave Requests fetch successfully",
      data: result,
    };
  }

  async create({ employeeId, startDate, endDate, leaveTypeId, reason }) {
    if (await helpers.isPending(employeeId))
      return {
        status: 400,
        msg: "Your account is currently active in leave application",
      };

    if (await helpers.hasUpcoming(employeeId)) {
      return {
        status: 400,
        msg: "The employee has upcoming leave",
      };
    }

    const result = await models.LeaveRequest.create({
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

  async updateByUser({
    id,
    employeeId,
    startDate,
    endDate,
    leaveTypeId,
    reason,
  }) {
    if (await helpers.isExist(id))
      return {
        status: 400,
        msg: "leave application is not exist",
      };

    if (await helpers.hasUpcoming(employeeId)) {
      return {
        status: 400,
        msg: "You currently have upcoming leave.",
      };
    }

    const result = await models.LeaveRequest.update(
      { startDate, endDate, leaveTypeId, reason },
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
    employeeId,
    status,
    authorizedComment,
    authorizedPersonId,
  }) {
    if (!(await helpers.isExist(id)))
      return {
        status: 400,
        msg: "leave application is not exist",
      };

    if (await helpers.hasUpcoming(employeeId)) {
      return {
        status: 400,
        msg: "The employee has upcoming leave",
      };
    }

    if (!(await helpers.isPending(employeeId)))
      return {
        status: 400,
        msg: "This request is already marked as approved/rejected",
      };

    const result = await models.LeaveRequest.update(
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
