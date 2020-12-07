const express = require("express");
const router = express.Router();
const { BadRequest } = require("../utils/errors");
const NonexistentResourceError = require("../utils/nonexistentResourceError");

// Obtener todos los emails suscritos a un artista
router.get("/", (req, res, next) => {
  const body = req.body;
  const artistId = parseInt(req.query.artistId);
  let subscriptors;
  if (!artistId) return next(new BadRequest());

  body.unqfyClient.existsArtist(artistId).then((exists) => {
    if (exists) subscriptors = body.observerManager.getSubscriptions(artistId);
    else
      return next(
        new NonexistentResourceError("UNQfy", artistId, "GetArtist")
      );

    res.send({
      artistId: artistId,
      subscriptors: subscriptors,
    });
  });
});

// Eliminar todos los emails suscritos a un artista
router.delete("/", (req, res, next) => {
  const artistId = parseInt(req.body.artistId);
  if (!artistId) return next(new BadRequest());

  req.body.unqfyClient.existsArtist(artistId).then((exists) => {
    if (exists) req.body.observerManager.deleteSubscriptions(artistId);
    else
      return next(
        new NonexistentResourceError("UNQfy", artistId, "GetArtist")
      );

    res.send();
  });
});

module.exports = router;
