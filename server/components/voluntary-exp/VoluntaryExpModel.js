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
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },

    company: Sequelize.STRING,
    position: Sequelize.STRING,
    address: Sequelize.STRING,
    from: Sequelize.DATEONLY,
    to: Sequelize.DATEONLY,
    totalHours: Sequelize.DECIMAL(10, 2),
  },
  { sequelize, modelName: "voluntary-experiences", timestamps: false }
);

module.exports = VoluntaryExpModel;
