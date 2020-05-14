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
    address_line1: Sequelize.STRING,
    address_line2: Sequelize.STRING,
    postCode: Sequelize.STRING,
    emailAdress: Sequelize.STRING,
    landline: Sequelize.STRING,
    mobile: Sequelize.STRING,
  },
  { sequelize, modelName: "contact" }
);

module.exports = ContactModel;
