const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const DepartmentModel = require("../department/DepartmentModel");

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
        key: "id",
        model: "departments",
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: "designations", timestamps: true, paranoid: true }
);
DepartmentModel.hasMany(DesignationModel);
DesignationModel.belongsTo(DepartmentModel);

module.exports = DesignationModel;
