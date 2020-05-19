const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../../database");

class ImageModel extends Model {}

ImageModel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imageUrl: Sequelize.STRING,
    imageId: Sequelize.STRING,
  },
  { sequelize, modelName: "images", timestamps: false }
);

module.exports = ImageModel;
