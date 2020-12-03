const express = require("express");
const router = express.Router();
const TrackDto = require("../dtos/trackDto");

router.get("/:trackId/lyrics", (req, res, next) => {
  const id = parseInt(req.params.trackId);
  const unqfy = req.body.unqfy;
  const trackName = unqfy.getTrackById(id).name;
  unqfy
    .getLyrics(id)
    .then((lyrics) => res.send({ name: trackName, lyrics: lyrics }))
    .catch((err) => {next(err)});
});

router.post("/", (req, res, next) => {
  const id = req.body.albumId;
  const trackData = {
    name : req.body.name,
    duration : req.body.duration,
    genres: req.body.genres
  };
  const unqfy = req.body.unqfy;
  const track = unqfy.addTrack(id, trackData);
  unqfy.save(req.body.dataPath);
  res.status(201).send(TrackDto.map(track));

  res.locals.message = "La Playlist " + track.id + " fue creada";
  next();
});

module.exports = router;
