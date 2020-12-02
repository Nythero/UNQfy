const express = require("express");
const router = express.Router();

// Obtener todos los emails suscritos a un artista
router.get("/", (req, res) => {
  const artistId = parseInt(req.query.artistId);
  const subscriptors = req.body.observerManager.getSubscriptions(artistId);
  res.send({
    artistId: artistId,
    subscriptors: subscriptors,
  });
});

// Eliminar todos los emails suscritos a un artista
router.delete("/", (req, res) => {
    const artistId = parseInt(req.body.artistId);
    req.body.observerManager.deleteSubscriptions(artistId);
    res.send();
  });

module.exports = router;
