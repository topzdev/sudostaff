const config = require("./config");
const Sequelize = require("sequelize");
const { __prod__ } = require("./constants");

module.exports = true
  ? new Sequelize(
      "postgres://wwlzgqgivcemlt:fedf4560d124663bb2833837a14c5e2918535b70351a7935f573692330d0bfb1@ec2-35-170-85-206.compute-1.amazonaws.com:5432/d70slogg2tguf1",
      {
        dialect: "postgres",
        protocol: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    )
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
