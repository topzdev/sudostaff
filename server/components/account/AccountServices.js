const AccountModel = require("./AccountModel");
const helper = require("./AccountHelpers");
const bcrypt = require("bcryptjs");

class AccountServices {
  async create({ employeeId, birthDate, lastName }) {
    const { username, password } = await helper.genDefaultCredential(
      employeeId,
      birthDate,
      lastName
    );

    const result = await AccountModel.create({
      username,
      employeeId,
      password,
    });

    return {
      status: 200,
      msg: "Account Created Successfully",
      data: {
        username,
        password,
      },
    };
  }

  async updatePassword({
    username,
    newPassword,
    oldPassword,
    confirmPassword,
  }) {
    const account = await helper.findAccount(username);

    console.log(account);

    if (!account)
      return {
        status: 404,
        msg: "Account not found.",
        data: helper.flatten(result.get({ plain: true })),
      };

    if (!(await bcrypt.compare(oldPassword, account.password)))
      return {
        status: 400,
        msg: "Old Password not match",
        data: helper.flatten(result.get({ plain: true })),
      };

    if (!(newPassword === confirmPassword)) {
      return {
        status: 400,
        msg: "New password not match with confirm password",
        data: helper.flatten(result.get({ plain: true })),
      };
    }

    if (newPassword.length < 8) {
      return {
        status: 400,
        msg: "New password is too short",
        data: helper.flatten(result.get({ plain: true })),
      };
    }

    const salt = await bcrypt.genSalt(25);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    const result = await AccountModel.update(
      { password: hashPassword },
      {
        where: {
          id: account.id,
        },
      }
    );

    return {
      status: 200,
      msg: "Account Password Successfully Changed",
    };
  }

  async resetAccount({ employeeId }) {
    const employeeInfo = await helper.employeeInfo(employeeId);

    if (!employeeInfo)
      return {
        status: 404,
        msg: "Employee Information not found",
      };

    const { username, password } = await helper.genDefaultCredential(
      employeeInfo.employeeId,
      employeeInfo.birthDate,
      employeeInfo.lastName
    );

    const result = await AccountModel.update({ username, password });

    return {
      status: 200,
      msg: "Account Reset Successfully",
    };
  }
}

module.exports = new AccountServices();
