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
        model: "employee",
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
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "leaveType",
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
