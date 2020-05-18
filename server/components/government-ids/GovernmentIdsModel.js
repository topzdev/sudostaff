const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class GovernmentIdsModel extends Model {}

GovernmentIdsModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    governmentIssueId: Sequelize.STRING,
    idLicensePassportId: Sequelize.STRING,
    dateIssuance: Sequelize.DATEONLY,
    placeIssuance: Sequelize.STRING,
  },
  { sequelize, modelName: "goverment-ids" }
);

module.exports = GovernmentIdsModel;
