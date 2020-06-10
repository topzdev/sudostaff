const { validateResponse } = require("../../helpers/validateResponse");
const leaveRequestService = require("./LeaveRequestServices");

class LeaveRequestController {
  async createLeaveRequest(req, res) {
    try {
      console.log(req.body);
      const result = await leaveRequestService.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchSummaryEmployee(req, res) {
    try {
      const result = await leaveRequestService.getSummaryEmployee(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchSummaryAdmin(req, res) {
    try {
      const result = await leaveRequestService.getSummaryAdmin();
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchLeaveRequestEmployee(req, res) {
    try {
      const result = await leaveRequestService.getAllByEmployee(
        req.params,
        req.query
      );
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchSingleLeaveRequest(req, res) {
    try {
      const result = await leaveRequestService.getOne(req.params, req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchLeaveRequests(req, res) {
    try {
      console.log(req.body);
      const result = await leaveRequestService.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateLeaveRequestByUser(req, res) {
    try {
      const result = await leaveRequestService.updateByUser(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateLeaveRequestByAdmin(req, res) {
    try {
      const result = await leaveRequestService.updateByAdmin(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new LeaveRequestController();
