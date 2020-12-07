const express = require("express");
const router = express.Router();
const ArtistDto = require("../dtos/artistDto");

router.get("/", (req, res) => {
  const artistName = req.query.name;

  const contains = (artist) => artistName === undefined || artist.name.toLowerCase().includes(artistName.toLowerCase());
  
  const artists = req.body.unqfy
    .getArtists()
    .filter((a) => contains(a));
  res.send(artists.map((a) => ArtistDto.map(a)));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const artist = req.body.unqfy.getArtistById(id);
  res.send(ArtistDto.map(artist));
});

router.post("/", (req, res, next) => {
  const body = req.body;
  const artistCreated = body.unqfy.addArtist({
    name: body.name,
    country: body.country,
  });
  body.unqfy.save(body.dataPath);

  res.status(201);
  res.send(ArtistDto.map(artistCreated));

  res.locals.message = "El Artista " + artistCreated.id + " fue creado";
  next();
});

router.delete("/:id", (req, res, next) => {
  const body = req.body;
  const id = parseInt(req.params.id);
  body.unqfy.deleteArtist(id);
  body.unqfy.save(body.dataPath);

  res.status(204).send();

  // Delete artist's subscriptions
  body.newsletterHelper.deleteSubscriptions(id);

  res.locals.message = "El Artista " + id + " fue eliminado";
  next();
});

router.put("/:id", (req, res, next) => {
  const body = req.body;
  const id = parseInt(req.params.id);
  const artistUpdated = body.unqfy.updateArtist({
    id: id,
    name: body.name,
    country: body.country,
  });
  body.unqfy.save(body.dataPath);

  res.status(200).send(ArtistDto.map(artistUpdated));

  res.locals.message = "El Artista " + id + " fue actualizado";
  next();
});

module.exports = router;
