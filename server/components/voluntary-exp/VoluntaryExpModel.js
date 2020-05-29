const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class VoluntaryExpModel extends Model {}

VoluntaryExpModel.init(
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

    company: Sequelize.STRING,
    position: Sequelize.STRING,
    address: Sequelize.STRING,
    from: Sequelize.INTEGER,
    to: Sequelize.INTEGER,
    totalHours: Sequelize.DECIMAL(10, 2),
  },
  { sequelize, modelName: "voluntaryExperiences", timestamps: false }
);

module.exports = VoluntaryExpModel;
