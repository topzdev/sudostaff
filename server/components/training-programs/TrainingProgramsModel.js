const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class TrainingPrograms extends Model {}

TrainingPrograms.init(
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
    title: Sequelize.STRING,
    from: Sequelize.DATEONLY,
    to: Sequelize.DATEONLY,
    totalHours: Sequelize.DECIMAL(10, 2),
    type: Sequelize.STRING,
    sponsor: Sequelize.STRING,
  },
  { sequelize, modelName: "training-programs", timestamps: true }
);

module.exports = TrainingPrograms;
