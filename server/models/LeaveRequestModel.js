const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

class LeaveRequestModel extends Model {}

LeaveRequestModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employee_id: {
      type: Sequelize.STRING,
      references: {
        model: "employees",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    startDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    endDate: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    leaveType: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "leaveTypes",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },

    requestStatus: {
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "leaveRequest" }
);

module.exports = LeaveRequestModel;
