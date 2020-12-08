const express = require("express");
const router = express.Router();
const { BadRequest } = require("../utils/errors");
const NonexistentResourceError = require("../utils/nonexistentResourceError");

// Suscribir un email a un artista
router.post("/", (req, res, next) => {
  const body = req.body;
  if (!body.artistId || !body.email) return next(new BadRequest());

  const artistId = parseInt(body.artistId);
  body.unqfyClient.existsArtist(artistId).then((exists) => {
    console.log(exists);
    if (exists) body.observerManager.subscribe(artistId, body.email);
    else
      return next(
        new NonexistentResourceError("UNQfy", artistId, "GetArtist")
      );

    res.send(body.observerManager.getSubscriptions(artistId));
  });
});

module.exports = router;
