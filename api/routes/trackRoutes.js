const express = require("express");
const router = express.Router();

const NonexistentTrackError = require("../../error/nonexistentTrackError");


router.get('/:trackId/lyrics', (req, res) => {
  const id = req.params.trackId;
  
  const lyrics = req.body.unqfy.getLyrics(id);

  const trackName = req.body.unqfy
    .getTrackById(id)
    .name;  

  Promise.resolve(lyrics)
    .then(l => res.send({ Name: trackName, lyrics: l }));
});

module.exports = router;
