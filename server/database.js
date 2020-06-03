const config = require("./config");
const Sequelize = require("sequelize");

module.exports = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
    logging: false,
  }
);
