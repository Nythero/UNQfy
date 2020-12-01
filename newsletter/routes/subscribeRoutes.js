const express = require("express");
const router = express.Router();

// Suscribir un email a un artista
router.post("/", (req, res) => {
  const body = req.body;
  body.observerManager.subscribe(body.artistId, body.email);

  res.send(body.observerManager.getSubscriptions(body.artistId));
});

module.exports = router;
