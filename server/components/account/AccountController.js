const { validateResponse } = require("../../helpers/validateResponse");
const accountServices = require("./AccountServices");

class AccountController {
  constructor() {
    console.log("Account Controller");
  }
  async getAccount(req, res) {
    try {
      const result = await accountServices.getOne(req.params);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async create(req, res) {
    try {
      const result = await accountServices.create(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updatePassword(req, res) {
    try {
      const result = await accountServices.updatePassword(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async updateUsername(req, res) {
    try {
      const result = await accountServices.updateUsername(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async resetAccount(req, res) {
    try {
      const result = await accountServices.resetAccount(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new AccountController();
