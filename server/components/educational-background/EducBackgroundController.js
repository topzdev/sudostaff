const { validateResponse } = require("../../helpers/validateResponse");
const EducBackgroundServices = require("./EducBackgroundServices");

class EducBackgroundController {
  constructor() {
    console.log("Training Programs Controller");
  }
  async fetchEducBackground(req, res) {
    try {
      const result = await EducBackgroundServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async createEducBackground(req, res) {
    try {
      const result = await EducBackgroundServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async updateEducBackground(req, res) {
    try {
      const result = await EducBackgroundServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }

  async deleteEducBackground(req, res) {
    try {
      const result = await EducBackgroundServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new EducBackgroundController();
