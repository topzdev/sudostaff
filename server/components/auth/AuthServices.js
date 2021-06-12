const models = require("../models");
const accountHelper = require("../account/AccountHelpers");
const employeeHelper = require("../employee/employeeHelpers");
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
      { employeeId: account.employeeId, id: account.id },
      config.jwtSecret,
      { expiresIn: "12hr" }
    );

    return {
      msg: "Welcome, Toy Storey Employee!",
      status: 200,
      data: token,
    };
  }

  async logout(res) {
    res.locals.user = null;
    console.log("Current user: ", res.locals.user);
    return {
      msg: "Logged Out",
      status: 200,
    };
  }

  async getUser(res) {
    const user = res.locals.user;

    console.log(user);

    if (!user)
      return {
        msg: "Unauthorized login",
        status: 401,
      };

    const result = await models.Account.findByPk(user.id, {
      attributes: ["id", "employeeId", "username", "isAdmin"],
      include: [
        {
          as: "employee",
          model: models.Employee,
          attributes: [
            "firstName",
            "lastName",
            "fullName",
            "id",
            "designationId",
            "photoId",
          ],

          include: employeeHelper.joinTable({
            withPhoto: true,
            withDesignation: true,
          }),
        },
      ],
    });

    console.log(result.get({ plain: true }));

    return {
      msg: "Logged in",
      status: 200,
      data: accountHelper.flatten(result.get({ plain: true })),
    };
  }
}

module.exports = new AuthServices();
