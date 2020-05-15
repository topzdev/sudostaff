const Sequelize = require("sequelize");
const LeaveRequestModel = require("../models/LeaveRequestModel");
const Op = Sequelize.Op;

exports.isExist = async () => {
  /** Check if the leave application is exist */
  const isExist = await LeaveRequestModel.findOne({ where: { id } });
  return isExist ? true : false;
};

exports.isActive = async () => {
  /** Check if the current employee is in active means that there is a active or pending application that the employee is submitted */
  const isActive = await LeaveRequestModel.findOne({
    where: {
      [Op.or]: [{ requestStatus: "active" }, { requestStatus: "pending" }],
    },
  });
  return isActive.length ? true : false;
};
