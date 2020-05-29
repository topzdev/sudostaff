const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const DeparmentHeadModel = require("./DepartmentHeadModel");

class DepartmentModel extends Model {}

DepartmentModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "departments", timestamps: true, paranoid: true }
);

DepartmentModel.hasOne(DeparmentHeadModel);

module.exports = DepartmentModel;
