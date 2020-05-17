const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

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
    extensionName: Sequelize.STRING,
    citizenship: Sequelize.STRING,
    emailAddress: Sequelize.STRING,
    landline: Sequelize.STRING,
    mobile: Sequelize.STRING,
    bloodType: Sequelize.STRING(5),
    height: Sequelize.DECIMAL,
    weight: Sequelize.DECIMAL,
    birthDate: Sequelize.DATE,
    birthPlace: Sequelize.STRING,
    civilStatus: Sequelize.STRING,
    joiningDate: Sequelize.DATE,

    gender: {
      type: Sequelize.ENUM("m", "f"),
      allowNull: false,
    },
    isRemoved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    addressId: {
      type: Sequelize.INTEGER,
      references: {
        model: "addresses",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
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
