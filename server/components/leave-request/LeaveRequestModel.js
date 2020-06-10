const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const LeaveTypeModel = require("../leave-type/LeaveTypeModel");

class LeaveRequestModel extends Model {}

LeaveRequestModel.init(
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

    leaveTypeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "leaveTypes",
        key: "id",
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

    reason: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    status: {
      type: Sequelize.ENUM("pending", "rejected", "approved"),
      defaultValue: "pending",
    },

    authorizedComment: {
      type: Sequelize.STRING,
    },

    authorizedPersonId: {
      type: Sequelize.STRING,
      references: {
        model: "employees",
        key: "id",
      },
    },
  },
  { sequelize, modelName: "leaveRequest", timestamps: true, paranoid: true }
);

// LeaveRequestModel.hasOne(LeaveTypeModel);
LeaveRequestModel.belongsTo(LeaveTypeModel);

module.exports = LeaveRequestModel;
