const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const LeaveRequestModel = require("../leave-request/LeaveRequestModel");

class LeaveTypeModel extends Model {}

LeaveTypeModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: Sequelize.STRING,
  },
  { sequelize, modelName: "leaveTypes" }
);

LeaveRequestModel.hasOne(LeaveTypeModel);
LeaveTypeModel.belongsTo(LeaveRequestModel);

module.exports = LeaveTypeModel;
