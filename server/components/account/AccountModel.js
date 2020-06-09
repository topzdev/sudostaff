const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
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
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "accounts", timestamps: true, paranoid: true }
);

module.exports = DepartmentHeadModel;
