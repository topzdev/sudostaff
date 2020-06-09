const Sequelize = require("sequelize");
const LeaveRequestModel = require("./LeaveRequestModel");
const Op = Sequelize.Op;

exports.isExist = async (id) => {
  /** Check if the leave application is exist */
  const isExist = await LeaveRequestModel.findOne({ where: { id } });
  return isExist ? true : false;
};

exports.isActive = async () => {
  /** Check if the current employee is in active means that there is a active or pending application that the employee is submitted */
  const isActive = await LeaveRequestModel.findOne({
    where: {
      [Op.or]: [{ status: "active" }, { status: "pending" }],
    },
  });

  return isActive ? true : false;
};

exports.joinTable = () => {};
