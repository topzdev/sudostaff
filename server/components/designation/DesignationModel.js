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
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
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
  { sequelize, modelName: "designations" }
);

module.exports = DesignationModel;
