const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const EmployeeModel = require("../employee/EmployeeModel");

class DepartmentHeadModel extends Model {}

DepartmentHeadModel.init(
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
    departmentId: {
      type: Sequelize.INTEGER,
      references: {
        model: "departments",
        key: "id",
      },
    },
  },
  { sequelize, modelName: "departmentHeads", timestamps: true, paranoid: true }
);

DepartmentHeadModel.belongsTo(EmployeeModel);

module.exports = DepartmentHeadModel;
