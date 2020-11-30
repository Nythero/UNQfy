const express = require("express");
const router = express.Router();

// Obtener todos los emails suscritos a un artista
router.get("/", (req, res) => {
  let artistId = req.query.artistId;
  // const subscriptors = unqfyAPI.getArtistSubs(artistId);
  res.send({
    artistId: artistId,
    subscriptors: ["nico@mail.com", "agus@mail.com"],
  });
});

// Eliminar todos los emails suscritos a un artista
router.delete("/", (req, res) => {
    const artistId = parseInt(req.body.artistId);
  
    res.send(artistId);
  });

module.exports = router;
