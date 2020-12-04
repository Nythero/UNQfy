const express = require("express");
const router = express.Router();
const { BadRequest } = require("../../api/utils/errors");
const NonexistentResourceError = require("../../error/nonexistentResourceError");

// Notificar a los usuarios suscritos
router.post("/", (req, res, next) => {
  const body = req.body;
  if (!body.artistId || !body.subject || !body.message)
    return next(new BadRequest());

  const artistId = parseInt(body.artistId);
  const subject = body.subject;
  const message = body.message;
  body.unqfyClient.existsArtist(artistId).then((exists) => {
    if (exists) body.observerManager.notify(artistId, subject, message);
    else
      return next(
        new NonexistentResourceError("UNQfy", artistId, "GetArtist")
      );

    res.send();
  });
});

module.exports = router;
