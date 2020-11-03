const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const handleErrors = require("../api/middlewares/handleErrors");
const unqfy = require("../api/middlewares/unqfy");

app.use(bodyParser.json());
app.use(unqfy);

const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');

app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);

app.use(handleErrors);

app.listen(port, () => {
  console.log(`UNQfy app listening at http://localhost:${port}`);
});
