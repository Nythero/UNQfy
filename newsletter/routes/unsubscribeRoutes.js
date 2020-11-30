const express = require("express");
const router = express.Router();

// Desuscribir un email
router.post("/", (req, res) => {
  const body = req.body;

  res.send({ artistId: body.artistId, email: body.email });
});

module.exports = router;
