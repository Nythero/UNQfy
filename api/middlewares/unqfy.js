const fs = require("fs");
const unqmod = require("../../unqfy");
const path = require("path");
const dataPath = path.join(__dirname, "../../data.json");

const unqfy = (req, res, next) => {
  req.body.dataPath = dataPath;
  req.body.unqfy = new unqmod.UNQfy();
  if (fs.existsSync(dataPath)) {
    req.body.unqfy = unqmod.UNQfy.load(dataPath);
  }
  next();
};

module.exports = unqfy;