const express = require("express");
const router = express.Router();

router.get("/:trackId/lyrics", (req, res, next) => {
  const id = req.params.trackId;
  const trackName = req.body.unqfy.getTrackById(id).name;

  req.body.unqfy
    .getLyrics(id)
    .then((lyrics) => res.send({ Name: trackName, lyrics: lyrics }))
    .catch((err) => next(err));
});

module.exports = router;
