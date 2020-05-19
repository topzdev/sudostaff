const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class LicenseInfoModel extends Model {}

LicenseInfoModel.init(
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
    stepIncrementd: Sequelize.STRING,
    monthlySalaray: Sequelize.DECIMAL(10, 2),
    from: Sequelize.DATEONLY,
    to: Sequelize.DATEONLY,
    isFullTime: Sequelize.BOOLEAN,
    isGovernmentService: Sequelize.BOOLEAN,
  },
  { sequelize, modelName: "license-infos", timestamps: false }
);

module.exports = LicenseInfoModel;
