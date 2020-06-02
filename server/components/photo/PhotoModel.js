const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");
const Employee = require("../employee/EmployeeModel");

class PhotoModel extends Model {}

PhotoModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    photoUrl: Sequelize.STRING,
    photoId: Sequelize.STRING,
  },
  { sequelize, modelName: "photos", timestamps: false }
);

module.exports = PhotoModel;
