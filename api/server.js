const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
const unqmod = require("../unqfy");
const dataPath = "../data.json";

const artistRoutes = require('./routes/artistRoutes');

const unqfyMiddleware = (req, res, next) => {
  req.body.dataPath = dataPath;
  req.body.unqfy = new unqmod.UNQfy();
  if (fs.existsSync(dataPath)) {
    req.body.unqfy = unqmod.UNQfy.load(dataPath);
  }
  next();
};
app.use(bodyParser.json());
app.use(unqfyMiddleware);

app.use('/artists', artistRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
