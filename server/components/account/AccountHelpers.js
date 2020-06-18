const models = require("../models");
const bcrypt = require("bcryptjs");
const dayjs = require("dayjs");
const employeeHelper = require("../employee/employeeHelpers");

const Op = models.Sequelize.Op;

exports.isExist = () => {};

exports.findAccount = async (username) => {
  const result = await models.Account.findOne({
    where: {
      [Op.or]: [{ username: username.toLowerCase() }, { employeeId: username }],
    },
    attributes: ["username", "password", "id", "employeeId"],
  });

  console.log(result);
  return result;
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
  const result = await models.Employee.findByPk(employeeId, {
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
