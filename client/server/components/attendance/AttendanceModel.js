const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class AttendanceModel extends Model {}

AttendanceModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    employeeId: {
      type: Sequelize.STRING,
      references: {
        model: "employees",
        key: "id",
      },
    },

    amBreakStart: Sequelize.DATE,
    amBreakEnd: Sequelize.DATE,

    pmBreakStart: Sequelize.DATE,
    pmBreakEnd: Sequelize.DATE,

    lunchBreakStart: Sequelize.DATE,
    lunchBreakEnd: Sequelize.DATE,

    signInTime: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },

    signOutTime: Sequelize.DATE,
  },
  { sequelize, modelName: "attendances", timestamps: true }
);

module.exports = AttendanceModel;
