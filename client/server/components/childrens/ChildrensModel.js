const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class Childrens extends Model {}

Childrens.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employeeId: {
      type: Sequelize.STRING,
      references: {
        model: "employees",
        key: "id",
      },
    },
    fullName: Sequelize.STRING,
    birthDate: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "childrens",
    timestamps: false,
  }
);

module.exports = Childrens;
