const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
class DepartmentHeadModel extends Model {}

DepartmentHeadModel.init(
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    employeeId: {
      type: Sequelize.STRING,
      allowNull: false,
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
