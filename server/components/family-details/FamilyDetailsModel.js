const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class FamilyModel extends Model {}

FamilyModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    spouseFirstName: Sequelize.STRING,
    spouseLastName: Sequelize.STRING,
    spouseExt: Sequelize.STRING,
    fatherFirstName: Sequelize.STRING,
    fatherMiddleName: Sequelize.STRING,
    fatherLastName: Sequelize.STRING,
    fatherExt: Sequelize.STRING,
    motherFirstName: Sequelize.STRING,
    motherMiddleName: Sequelize.STRING,
    motherLastName: Sequelize.STRING,
    motherExt: Sequelize.STRING,
  },
  {
    sequelize,
    modelName: "family-details",
    timestamps: true,
  }
);

module.exports = FamilyModel;
FamilyModel;
