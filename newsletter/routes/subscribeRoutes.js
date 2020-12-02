const express = require("express");
const router = express.Router();

// Suscribir un email a un artista
router.post("/", (req, res) => {
  const body = req.body;
  const artistId = parseInt(body.artistId);
  body.observerManager.subscribe(artistId, body.email);

  res.send(body.observerManager.getSubscriptions(artistId));
});

module.exports = router;
