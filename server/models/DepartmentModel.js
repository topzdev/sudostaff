const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

class DepartmentModel extends Model {}

DepartmentModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  },
  { sequelize, modelName: "department" }
);

module.exports = DepartmentModel;
