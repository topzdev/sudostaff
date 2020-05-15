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
    maritalStatus: Sequelize.STRING,
    joiningDate: Sequelize.DATE,
    birthPlace: Sequelize.STRING,
    citizenship: Sequelize.STRING,
    city: Sequelize.STRING,
    country: Sequelize.STRING,
    province: Sequelize.STRING,
    addressLine1: Sequelize.STRING,
    addressLine2: Sequelize.STRING,
    postalCode: Sequelize.STRING,
    emailAddress: Sequelize.STRING,
    landline: Sequelize.STRING,
    mobile: Sequelize.STRING,
    gender: {
      type: Sequelize.ENUM("m", "f"),
      allowNull: false,
    },
    isRemoved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    designationId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "designations",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  { sequelize, modelName: "employees", timestamps: true }
);

module.exports = EmployeeModel;
