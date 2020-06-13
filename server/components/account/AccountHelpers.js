const AccountModel = require("./AccountModel");
const EmployeeModel = require("../employee/EmployeeModel");
const bcrypt = require("bcryptjs");
const dayjs = require("dayjs");

exports.isExist = () => {};

exports.findAccount = async (username) => {
  const result = await AccountModel.findOne({
    where: {
      username,
    },
    attributes: ["username", "password", "id", "employeeId"],
  });
  return result;
};

exports.genDefaultCredential = async (employeeId, birthDate, lastName) => {
  const password =
    lastName.toUpperCase() + "-" + dayjs(birthDate).format("MDYYYY");
  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);
  const username = employeeId.toUpperCase();

  return { password: hashPassword, username, rawPassword: password };
};

exports.employeeInfo = async (employeeId) => {
  const result = await EmployeeModel.findByPk(employeeId, {
    attributes: ["lastName", "id", "birthDate"],
  });

  return result.get({ plain: true });
};
