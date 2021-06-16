const config = require("./config");
const Sequelize = require("sequelize");
const { __prod__ } = require("./constants");

module.exports = __prod__
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(
      config.database.database,
      config.database.user,
      config.database.password,
      {
        host: config.database.host,
        dialect: config.database.dialect,
        // logging: false,
      }
    );
