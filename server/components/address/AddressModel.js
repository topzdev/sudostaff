const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class AddressModel extends Model {}

AddressModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    houseBlock: Sequelize.STRING,
    street: Sequelize.STRING,
    subdivision: Sequelize.STRING,
    barangay: Sequelize.STRING,
    city: Sequelize.STRING,
    zipcode: Sequelize.STRING,
    houseBlock2: Sequelize.STRING,
    street2: Sequelize.STRING,
    subdivision2: Sequelize.STRING,
    barangay2: Sequelize.STRING,
    city2: Sequelize.STRING,
    zipcode2: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "addresses",
    timestamps: false,
  }
);

module.exports = AddressModel;
