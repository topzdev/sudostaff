const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

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
        model: "department",
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  { sequelize, modelName: "designation" }
);

module.exports = DesignationModel;
