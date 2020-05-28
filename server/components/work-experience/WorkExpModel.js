const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class WorkExpModel extends Model {}

WorkExpModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    salaryGrade: Sequelize.STRING,
    stepIncremented: Sequelize.STRING,
    monthlySalaray: Sequelize.DECIMAL(10, 2),
    from: Sequelize.INTEGER,
    to: Sequelize.INTEGER,
    isFullTime: Sequelize.BOOLEAN,
    isGovernmentService: Sequelize.BOOLEAN,
  },
  { sequelize, modelName: "license-infos", timestamps: false }
);

module.exports = WorkExpModel;
