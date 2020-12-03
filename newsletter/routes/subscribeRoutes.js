const express = require("express");
const NonexistentResourceError = require("../../error/nonexistentResourceError");
const router = express.Router();

// Suscribir un email a un artista
router.post("/", (req, res, next) => {
  const body = req.body;
  const artistId = parseInt(body.artistId);
  body.unqfyClient.existsArtist(artistId).then((exists) => {
    if (exists) body.observerManager.subscribe(artistId, body.email);
    else return next(new NonexistentResourceError("Artist", artistId, "GetArtist"));
    
    res.send(body.observerManager.getSubscriptions(artistId));
  });
});

module.exports = router;
