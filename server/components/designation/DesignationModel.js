const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class DesignationModel extends Model {}

DesignationModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    departmentId: {
      type: Sequelize.INTEGER,
      references: {
        model: "departments",
        key: "id",
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize, modelName: "designations" }
);

module.exports = DesignationModel;
