const { validateResponse } = require("../helpers/validateResponse");
const leaveRequestService = require("../services/LeaveRequestServices");

class LeaveRequestController {
  async createLeaveRequest(req, res) {
    try {
      const result = await leaveRequestService.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
  async fetchSingleLeaveRequest(req, res) {
    try {
      const result = await leaveRequestService.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async fetchLeaveRequests(req, res) {
    try {
      console.log(req.body);
      const result = await leaveRequestService.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateLeaveRequestByUser(req, res) {
    try {
      const result = await leaveRequestService.updateByUser(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateLeaveRequestByAdmin(req, res) {
    try {
      const result = await leaveRequestService.updateByAdmin(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new LeaveRequestController();
