const { validateResponse } = require("../../helpers/validateResponse");
const VoluntaryExpServices = require("./VoluntaryExpServices");

class VoluntaryExpController {
  constructor() {
    console.log("Voluntary Experience Controller");
  }
  async fetchSingleVoluntaryExp(req, res) {
    try {
      const result = await VoluntaryExpServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
  async fetchVoluntaryExp(req, res) {
    try {
      const result = await VoluntaryExpServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createVoluntaryExp(req, res) {
    try {
      console.log(req.body);
      const result = await VoluntaryExpServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateVoluntaryExp(req, res) {
    try {
      const result = await VoluntaryExpServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteVoluntaryExp(req, res) {
    try {
      const result = await VoluntaryExpServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new VoluntaryExpController();
