const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../database");

class ContactModel extends Model {}

ContactModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    city: Sequelize.STRING,
    country: Sequelize.STRING,
    province: Sequelize.STRING,
    addressLine1: Sequelize.STRING,
    addressLine2: Sequelize.STRING,
    postalCode: Sequelize.STRING,
    emailAddress: Sequelize.STRING,
    landline: Sequelize.STRING,
    mobile: Sequelize.STRING,
  },
  { sequelize, modelName: "contacts", underscored: true }
);

module.exports = ContactModel;
