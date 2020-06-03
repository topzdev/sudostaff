const { validateResponse } = require("../../helpers/validateResponse");
const WorkExpServices = require("./WorkExpServices");

class WorkExpController {
  constructor() {
    console.log("License Controller");
  }
  async fetchWorkExps(req, res) {
    try {
      const result = await WorkExpServices.getAll(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
  async fetchSingleWorkExp(req, res) {
    try {
      console.log(req.params);
      const result = await WorkExpServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createWorkExp(req, res) {
    try {
      console.log(req.body);
      const result = await WorkExpServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateWorkExp(req, res) {
    try {
      const result = await WorkExpServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteWorkExp(req, res) {
    try {
      const result = await WorkExpServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new WorkExpController();
