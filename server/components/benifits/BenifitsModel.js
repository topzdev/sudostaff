const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class BenifitsModel extends Model {}

BenifitsModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gsisId: Sequelize.STRING,
    pagibigId: Sequelize.STRING,
    philhealthId: Sequelize.STRING,
    sssNo: Sequelize.STRING,
    tinNo: Sequelize.STRING,
    agencyEmployeerId: Sequelize.STRING,
  },
  { sequelize, modelName: "benifits", timestamps: false }
);

module.exports = BenifitsModel;
