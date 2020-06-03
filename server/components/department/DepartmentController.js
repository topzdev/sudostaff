const { validateResponse } = require("../../helpers/validateResponse");
const departmentServices = require("./DepartmentServices");

class DepartmentController {
  constructor() {
    console.log("Department Controller");
  }

  async createDepartment(req, res) {
    try {
      console.log(req.body);
      const result = await departmentServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchSingleDisignation(req, res) {
    try {
      const result = await departmentServices.getOne(req.params, req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async fetchDepartments(req, res) {
    try {
      console.log(req.body);
      const result = await departmentServices.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateDepartment(req, res) {
    try {
      const result = await departmentServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteDepartment(req, res) {
    try {
      const result = await departmentServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new DepartmentController();
