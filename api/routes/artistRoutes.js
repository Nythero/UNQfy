const express = require("express");
const router = express.Router();
const ArtistDto = require("../dtos/artistDto");

router.get("/", (req, res) => {
  const artists = req.body.unqfy.getArtists();
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
    country: body.countr,
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

// router.patch("/", (req, res) => {
//   const body = req.body;
//   const artistCreated = req.body.unqfy.addArtist({
//     name: body.name,
//     country: body.countr,
//   });
//   req.body.unqfy.save(req.body.dataPath);

//   res.status(201);
//   res.send(artistCreated);
// });

module.exports = router;
