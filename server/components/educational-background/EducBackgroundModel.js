const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class EducBackgroundModel extends Model {}

EducBackgroundModel.init(
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
    level: Sequelize.STRING,
    degree: Sequelize.STRING,
    schoolName: Sequelize.STRING,
    from: Sequelize.DATEONLY,
    to: Sequelize.DATEONLY,
    graduateYear: Sequelize.INTEGER,
    recognition: Sequelize.STRING,
    scholarship: Sequelize.STRING,
  },
  { sequelize, modelName: "educ-backgrounds", timestamps: false }
);

module.exports = EducBackgroundModel;
