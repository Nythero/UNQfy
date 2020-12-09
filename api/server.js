const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

//Routes
const artistRoutes = require('./routes/artistRoutes');
const trackRoutes  = require('./routes/trackRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const userRoutes = require('./routes/userRoutes');
const defaultRoute = require('./routes/defaultRoute');

const handleErrors = require("../api/middlewares/handleErrors");
const unqfy = require("../api/middlewares/unqfy");
const badParsingError = require("../api/middlewares/badParsing");
const notify = require("../api/middlewares/notification.js");
const newsletterHelper = require("./middlewares/newsletter");

app.use(bodyParser.json());

app.use(badParsingError);

app.use(unqfy);
app.use(newsletterHelper);

const api = '/api';

app.use(api + '/artists', artistRoutes);
app.use(api + '/tracks', trackRoutes);
app.use(api + '/playlists', playlistRoutes);
app.use(api + '/albums', albumRoutes);
app.use(api + '/users', userRoutes);
app.use('*', notify);
app.use('*', defaultRoute);
app.use(handleErrors);

app.listen(port, () => {
  console.log(`UNQfy app listening at http://localhost:${port}`);
});
