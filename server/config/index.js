require("dotenv").config();

const config = {
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
  },
  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    folder: process.env.CLOUDINARY_FOLDER,
    profileFolder: process.env.CLOUDINARY_FOLDER + "/profiles",
  },
  mailer: {
    email: process.env.MAILER_EMAIL,
    password: process.env.MAILER_PASSWORD,
  },
};

module.exports = config;
