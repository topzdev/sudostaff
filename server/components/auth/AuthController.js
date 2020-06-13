const { validateResponse } = require("../../helpers/validateResponse");
const authServices = require("./AuthServices");

class AuthController {
  constructor() {
    console.log("Auth Controller");
  }
  async login(req, res) {
    try {
      const result = await authServices.login(req.body);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async logout(req, res) {
    try {
      const result = await authServices.logout(res);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }

  async getUser(req, res) {
    try {
      const result = await authServices.getUser(res);
      validateResponse(res, result);
    } catch (error) {
      console.error(error);
      validateResponse(res, { status: 500, msg: "Server Error", data: error });
    }
  }
}

module.exports = new AuthController();
