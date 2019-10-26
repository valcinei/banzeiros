const path = require("path");
require("dotenv").config({path: path.resolve(process.cwd(), "src/.env")});
const cors = require("cors");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

const router = require("./routes");
app.use(router);
app.listen(3333);
