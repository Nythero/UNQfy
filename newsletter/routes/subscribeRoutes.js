const express = require("express");
const router = express.Router();

// Suscribir un email a un artista
router.post("/", (req, res) => {
  const body = req.body;

  res.send({ artistId: body.artistId, email: body.email });
});

module.exports = router;
