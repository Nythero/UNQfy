const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const unqfy = require("../api/middlewares/unqfy");
const handleErrors = require("../api/middlewares/handleErrors");

const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');

app.use(bodyParser.json());
app.use(unqfy);
app.use(handleErrors);

app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);

app.listen(port, () => {
  console.log(`UNQfy app listening at http://localhost:${port}`);
});
