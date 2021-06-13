const models = require("../models");
const helper = require("./helpers");
const Model = require("../employee/EmployeeModel");
const Op = models.Sequelize.Op;

class DasboardServices {
  async getCounts() {
    const employeeCount = await models.Employee.count();
    const departmentCount = await models.Department.count();
    const designationCount = await models.Designation.count();
    const leaveRequestCount = await models.LeaveRequest.count();

    return {
      status: 200,
      msg: "Dashboard couns fetch successfully",
      data: {
        counts: {
          employee: employeeCount,
          department: departmentCount,
          designation: designationCount,
          leaveRequest: leaveRequestCount,
        },
      },
    };
  }

  async getRecentAddedEmployee() {
    const result = await models.Employee.findAll({
      attributes: ["id", "firstName", "lastName", "fullName", "createdAt"],
      order: [["createdAt", "DESC"]],
      limit: 10,
      include: [{ model: models.Photo }],
    });

    return {
      status: 200,
      msg: "Recently Added Employee",
      data: result,
    };
  }

  async getActiveLeaveRequest() {
    const result = await models.LeaveRequest.findAll({
      where: {
        status: "approved",
        startDate: { [Op.lte]: new Date() },
        endDate: { [Op.gte]: new Date() },
      },
      include: [
        {
          model: models.Employee,
          as: "submittedBy",
          attributes: ["id", "fullName", "firstName", "lastName"],
          include: [
            {
              model: models.Photo,
            },
          ],
        },

        {
          model: models.LeaveType,
          attributes: ["id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
      limit: 10,
    });

    return {
      status: 200,
      msg: "Active Leave Request",
      data: result,
    };
  }
}

module.exports = new DasboardServices();
