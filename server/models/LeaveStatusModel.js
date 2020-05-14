const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

class LeaveStatusModel extends Model {}

LeaveStatusModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: Sequelize.STRING,
  },
  { sequelize, modelName: "leaveStatuses" }
);

module.exports = LeaveStatusModel;
