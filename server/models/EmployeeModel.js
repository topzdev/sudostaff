const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

class EmployeeModel extends Model {}

EmployeeModel.init(
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    middleName: Sequelize.STRING,
    birthDate: Sequelize.DATE,
    gender: Sequelize.STRING,
    maritalStatus: Sequelize.STRING,
    joiningDate: Sequelize.DATE,
    birthPlace: Sequelize.STRING,
    citizenship: Sequelize.STRING,
    contact_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "contact",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    designation_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "designation",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  { sequelize, modelName: "employee", timestamps: true }
);

module.exports = EmployeeModel;
