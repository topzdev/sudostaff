const { validateResponse } = require("../../helpers/validateResponse");
const GovernmentIdsServices = require("./GovernmentIdsServices");

class GovernmentIdsController {
  constructor() {
    console.log("Governments IDs Controller");
  }
  async fetchSingleGovernmentIds(req, res) {
    try {
      console.log(req.body);
      const result = await GovernmentIdsServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async createGovernmentIds(req, res) {
    try {
      console.log(req.body);
      const result = await GovernmentIdsServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async updateGovernmentIds(req, res) {
    try {
      const result = await GovernmentIdsServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async deleteGovernmentIds(req, res) {
    try {
      const result = await GovernmentIdsServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
}

module.exports = new GovernmentIdsController();
