const express = require("express");
const router = express.Router();
const ArtistDto = require("../dtos/artistDto");

router.get("/", (req, res) => {
  const artistName = req.query.name;

  const contains = (artist) => artistName === undefined || artist.name.toLowerCase().includes(artistName.toLowerCase());
  
  const artists = req.body.unqfy
    .getArtists()
    .filter((a) => contains(a));/*
  const artistName = req.query.name.toLowerCase();
  const artists = req.body.unqfy.searchArtists(artistName);*/
  res.send(artists.map((a) => ArtistDto.map(a)));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const artist = req.body.unqfy.getArtistById(id);
  res.send(ArtistDto.map(artist));
});

router.post("/", (req, res) => {
  const body = req.body;
  const artistCreated = body.unqfy.addArtist({
    name: body.name,
    country: body.country,
  });
  body.unqfy.save(body.dataPath);

  res.status(201);
  res.send(ArtistDto.map(artistCreated));
});

router.delete("/:id", (req, res) => {
  const body = req.body;
  const id = parseInt(req.params.id);
  body.unqfy.deleteArtist(id);
  body.unqfy.save(body.dataPath);

  res.status(204).send();
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const id = parseInt(req.params.id);
  const artistUpdated = body.unqfy.updateArtist({
    id: id,
    name: body.name,
    country: body.country,
  });
  body.unqfy.save(body.dataPath);

  res.status(200);
  res.send(ArtistDto.map(artistUpdated));
});

module.exports = router;
