const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config");
const bodyParser = require("body-parser");
const database = require("./database");
const hrModels = require("./components/models");
const hrRoute = require("./components/routes");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse files in req.body
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/", debug: true }));

cloudinary.v2.config(config.cloudinary);

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Sync all tables
// database.sync();

app.use("/hr/api/", hrRoute);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

const port = config.port || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
