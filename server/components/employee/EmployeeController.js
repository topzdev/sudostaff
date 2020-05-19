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
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
  async fetchSingleEmployee(req, res) {
    try {
      console.log(req.params);
      const result = await employeeServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async createEmployee(req, res) {
    try {
      const result = await employeeServices.create(req.body, req.files);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async updateEmployee(req, res) {
    try {
      console.log("Update", req.body);
      const result = await employeeServices.update(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async removeEmployee(req, res) {
    try {
      const result = await employeeServices.remove(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }

  async deleteEmployee(req, res) {
    try {
      const result = await employeeServices.delete(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error" });
    }
  }
}

module.exports = new EmployeeController();
