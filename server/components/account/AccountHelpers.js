const AccountModel = require("./AccountModel");
const EmployeeModel = require("../employee/EmployeeModel");
const bcrypt = require("bcryptjs");
const dayjs = require("dayjs");
const sequelize = require("sequelize");
const employeeHelper = require("../employee/employeeHelpers");

const Op = sequelize.Op;

exports.isExist = () => {};

exports.findAccount = async (username) => {
  const result = await AccountModel.findOne({
    where: {
      [Op.or]: [{ username: username.toLowerCase() }, { employeeId: username }],
    },
    attributes: ["username", "password", "id", "employeeId"],
  });

  return result.get({ plain: true });
};

exports.genDefaultCredential = async (employeeId, birthDate, lastName) => {
  const password = (
    lastName +
    "-" +
    dayjs(birthDate).format("MDYYYY")
  ).toLowerCase();

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);
  const username = employeeId.toLowerCase();

  return { password: hashPassword, username, rawPassword: password };
};

exports.employeeInfo = async (employeeId) => {
  const result = await EmployeeModel.findByPk(employeeId, {
    attributes: ["lastName", "id", "birthDate"],
  });

  return result.get({ plain: true });
};

exports.flatten = (user) => {
  let userInfo = user;
  let employee = userInfo.employee;
  delete userInfo.employee;

  userInfo = { ...userInfo, employee: employeeHelper.flatten(employee) };

  console.log(userInfo);

  return userInfo;
};
