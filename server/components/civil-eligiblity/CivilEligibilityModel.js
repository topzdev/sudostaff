const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class CivilEligibility extends Model {}

CivilEligibility.init(
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
    licenseTitle: Sequelize.STRING,
    licenseNumber: Sequelize.STRING,
    rating: Sequelize.STRING,
    validityDate: Sequelize.DATEONLY,
    examinationDate: Sequelize.DATEONLY,
    examinationPlace: Sequelize.STRING,
  },
  { sequelize, modelName: "civil-eligibilities", timestamps: false }
);

module.exports = CivilEligibility;
