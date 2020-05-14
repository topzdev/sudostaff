const { validateResponse } = require("../helpers/validateResponse");
const employeeServices = require("../services/EmployeeServices");

class EmployeeController {
  constructor() {
    console.log("Employee Controller");
  }

  async createEmployee(req, res) {
    try {
      const result = await employeeServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: "500", msg: "Server Error" });
    }
  }
}

module.exports = new EmployeeController();
