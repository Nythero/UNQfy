const express = require("express");
const router = express.Router();

// Notificar a los usuarios suscritos 
router.post("/", (req, res) => {
  const body = req.body;

  res.send({
    artistId: body.artistId,
    subject: "Nuevo Album para artsta Chano",
    message: "Se ha agregado el album XXX al artista Chano",
  });
});

module.exports = router;
