const AccountModel = require("../account/AccountModel");
const accountHelper = require("../account/AccountHelpers");
const bcrypt = require("bcryptjs");
const config = require("../../config");
const jwt = require("jsonwebtoken");

class AuthServices {
  async login({ username, password }) {
    if (!username)
      return {
        status: 400,
        msg: "Username is required",
      };

    if (!password)
      return {
        status: 400,
        msg: "Password is required",
      };

    const account = await accountHelper.findAccount(username);

    if (!account)
      return {
        status: 404,
        msg: "Account is not exist",
      };

    if (!(await bcrypt.compare(password, account.password)))
      return {
        status: 404,
        msg: "Password not match",
      };

    const token = jwt.sign(
      { employeeId: account.employeeId },
      config.jwtSecret,
      { expiresIn: "24hr" }
    );

    return {
      msg: "Welcome, Sudostaff Employee!",
      status: 200,
      data: token,
    };
  }
}

module.exports = new AuthServices();
