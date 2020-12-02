const express = require("express");
const router = express.Router();

// Notificar a los usuarios suscritos 
router.post("/", (req, res) => {
  const body = req.body;
  const artistId = parseInt(body.artistId);
  const subject = body.subject;
  const message = body.message;

  req.body.observerManager.notify(artistId, subject, message);
  res.send();
});

module.exports = router;
