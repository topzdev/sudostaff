const { validateResponse } = require("../../helpers/validateResponse");
const employeeServices = require("./EmployeeServices");

class EmployeeController {
  constructor() {
    console.log("Employee Controller");
  }
  async fetchEmployees(req, res) {
    try {
      console.log(req.body);
      const result = await employeeServices.getAll(req.query);
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
  async fetchSingleEmployee(req, res) {
    try {
      console.log(req.params);
      const result = await employeeServices.getOne(req.params, req.query);
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async createEmployee(req, res) {
    try {
      const result = await employeeServices.create(req.body, req.files);
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateEmployee(req, res) {
    try {
      console.log("Update", req.body, req.files);
      const result = await employeeServices.update(req.body, req.files);
      validateResponse(res, result);
    } catch (error) {
      console.log("ERROR EME:", error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async removeEmployee(req, res) {
    try {
      const result = await employeeServices.remove(req.params);
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async deleteEmployee(req, res) {
    try {
      const result = await employeeServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new EmployeeController();
