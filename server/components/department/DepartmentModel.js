const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

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

    headId: {
      type: Sequelize.INTEGER,
      references: {
        model: "employees",
        key: "id",
      },
    },

    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize, modelName: "departments" }
);

module.exports = DepartmentModel;
