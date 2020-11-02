const express = require("express");
const router = express.Router();
const AlbumDto = require("../dtos/albumDto");

router.get("/", (req, res) => {
  const albumName = req.query.name.toLowerCase();
  const albums = req.body.unqfy.searchAlbums(albumName);
  res.send(albums.map((a) => AlbumDto.map(a)));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const album = req.body.unqfy.getAlbumById(id);
  res.send(AlbumDto.map(album));
});

router.post("/", (req, res) => {
  const body = req.body;
  const albumCreated = body.unqfy.addAlbum(body.artistId, {
    name: body.name,
    year: body.year,
  });
  body.unqfy.save(body.dataPath);

  res.status(201);
  res.send(AlbumDto.map(albumCreated));
});

router.delete("/:id", (req, res) => {
  const body = req.body;
  const id = parseInt(req.params.id);
  body.unqfy.deleteAlbum(id);
  body.unqfy.save(body.dataPath);

  res.status(204).send();
});

router.patch("/:id", (req, res) => {
  const body = req.body;
  const id = parseInt(req.params.id);
  const albumUpdated = body.unqfy.updateAlbum({
    id: id,
    name: body.name,
    year: body.year,
  });
  body.unqfy.save(body.dataPath);

  res.status(200);
  res.send(AlbumDto.map(albumUpdated));
});

module.exports = router;
