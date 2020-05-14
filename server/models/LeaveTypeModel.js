const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

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
  { sequelize, modelName: "leaveType" }
);

module.exports = LeaveTypeModel;
