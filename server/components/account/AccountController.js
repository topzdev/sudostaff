const { validateResponse } = require("../../helpers/validateResponse");
const accountServices = require("./AccountServices");

class AccountController {
  constructor() {
    console.log("Account Controller");
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
