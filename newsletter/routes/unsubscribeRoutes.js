const express = require("express");
const router = express.Router();

// Desuscribir un email
router.post("/", (req, res) => {
  const body = req.body;
  body.observerManager.unsubscribe(body.artistId, body.email);

  res.send(body.observerManager.getSubscriptions(body.artistId));
});

module.exports = router;
