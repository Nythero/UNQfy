const express = require("express");
const app     = express();
const bodyParser = require("body-parser");
const errorHandling = require("./middlewares/handleErrors");
const badParsingError = require("./middlewares/badParsing");
const defaultRoute  = require("./routes/defaultRoute");
const logManager = require("./logManager");

const PATH = "/api";

const log = function (req, res, next) {
  const logData = req.body;

  logManager.log(logData);

  res.status(200).send();
};

app.use(bodyParser.json());

app.use(badParsingError);

app.use(PATH + "/notify", log);

app.use(defaultRoute)

app.use(errorHandling);

module.exports = app;
