const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");
const unqmod = require("../unqfy");
const path = require("path");
const dataPath = path.join(__dirname, "../data.json");

//Routes
const artistRoutes = require('./routes/artistRoutes');
const trackRoutes  = require('./routes/trackRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const albumRoutes = require('./routes/albumRoutes');

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

const api = '/api';

app.use(api + '/artists', artistRoutes);
app.use(api + '/tracks', trackRoutes);
app.use(api + '/playlists', playlistRoutes);
app.use(api + '/albums', albumRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
