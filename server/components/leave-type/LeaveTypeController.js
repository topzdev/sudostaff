const { validateResponse } = require("../../helpers/validateResponse");
const leaveTypeService = require("./LeaveTypeServices");

class LeaveTypeController {
  async createLeaveType(req, res) {
    try {
      console.log(req.body);
      const result = await leaveTypeService.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
  async fetchSingleLeaveType(req, res) {
    try {
      const result = await leaveTypeService.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async fetchLeaveTypes(req, res) {
    try {
      console.log(req.body);
      const result = await leaveTypeService.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateLeaveType(req, res) {
    try {
      const result = await leaveTypeService.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async deleteLeaveType(req, res) {
    try {
      const result = await leaveTypeService.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new LeaveTypeController();
