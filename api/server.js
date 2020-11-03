const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//Routes
const artistRoutes = require('./routes/artistRoutes');
const trackRoutes  = require('./routes/trackRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const albumRoutes = require('./routes/albumRoutes');

const handleErrors = require("../api/middlewares/handleErrors");
const unqfy = require("../api/middlewares/unqfy");

app.use(bodyParser.json());
app.use(unqfy);

const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');

const api = '/api';

app.use(api + '/artists', artistRoutes);
app.use(api + '/tracks', trackRoutes);
app.use(api + '/playlists', playlistRoutes);
app.use(api + '/albums', albumRoutes);

app.use(handleErrors);

app.listen(port, () => {
  console.log(`UNQfy app listening at http://localhost:${port}`);
});
