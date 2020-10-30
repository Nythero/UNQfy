const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const fs = require("fs");
const unqmod = require("../unqfy");
const dataPath = "../data.json";
let unqfy;

const unqfyMiddleware = (req, res, next) => {
  unqfy = new unqmod.UNQfy();
  if (fs.existsSync(dataPath)) {
    unqfy = unqmod.UNQfy.load(dataPath);
  }
  next();
};
app.use(unqfyMiddleware);

app.get("/", (req, res) => {
  res.send(unqfy.hello());
});

app.get("/artists", (req, res) => {
  res.send(unqfy.getArtists());
});

app.get("/artists/:id", (req, res) => {
  const id = req.params.id;
  const artist = unqfy.getArtistById(id);
  res.send(artist);
});

app.post("/artists", (req, res) => {
  const body = req.body;
  const artistCreated = unqfy.addArtist({
    name: body.name,
    country: body.countr,
  });
  unqfy.save(dataPath);

  res.status(201);
  res.send(artistCreated);
});

app.delete("/artists/:id", (req, res) => {
  const id = req.params.id;
  unqfy.deleteArtist(id);
  unqfy.save(dataPath);
  
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
