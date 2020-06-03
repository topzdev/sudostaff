const { validateResponse } = require("../../helpers/validateResponse");
const designationServices = require("./DesignationServices");

class DesignationController {
  async createDesignation(req, res) {
    try {
      const result = await designationServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchSingleDesignation(req, res) {
    try {
      const result = await designationServices.getOne(req.params, req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchDesignations(req, res) {
    try {
      console.log(req.body);
      const result = await designationServices.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateDesignation(req, res) {
    try {
      const result = await designationServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteDesignation(req, res) {
    try {
      const result = await designationServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new DesignationController();
