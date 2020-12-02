const express = require("express");
const router = express.Router();

// Desuscribir un email
router.post("/", (req, res) => {
  const body = req.body;
  const artistId = parseInt(body.artistId);
  body.observerManager.unsubscribe(artistId, body.email);

  res.send(body.observerManager.getSubscriptions(artistId));
});

module.exports = router;
