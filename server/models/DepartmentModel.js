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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    isRemoved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "departments" }
);

module.exports = DepartmentModel;
