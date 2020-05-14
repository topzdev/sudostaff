const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config");
const bodyParser = require("body-parser");
const database = require("./database");
const tables = require("./models");
const hrRoute = require("./routes");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

tables();

app.use("/hr/api/", hrRoute);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

const port = config.port || 5000;

app.listen(port, () => console.log("Server Established"));
