const { validateResponse } = require("../../helpers/validateResponse");
const dashboardServices = require("./services");

class DashboardController {
  constructor() {
    console.log("Dasboard Controller");
  }
  async getCounts(req, res) {
    try {
      console.log(req.body);
      const result = await dashboardServices.getCounts();
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
  async getRecentlyAddedEmployee(req, res) {
    try {
      console.log(req.body);
      const result = await dashboardServices.getRecentAddedEmployee();
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
  async getActiveLeaveRequest(req, res) {
    try {
      console.log(req.body);
      const result = await dashboardServices.getActiveLeaveRequest();
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new DashboardController();
