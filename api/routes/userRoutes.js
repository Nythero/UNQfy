const express = require("express");
const router = express.Router();
const UserDto = require("../dtos/userDto");
const TrackDto = require("../dtos/trackDto");

router.get("/", (req, res) => {
  let username = req.query.username;
  username = username === undefined ? "" : username.toLowerCase();

  const users = req.body.unqfy
    .getUsuarios()
    .filter((u) => u.username.toLowerCase().includes(username));
  res.send(users.map((a) => UserDto.map(a)));
});

router.get("/:username", (req, res) => {
  const username = req.params.username;
  const user = req.body.unqfy.getUsuario(username);
  res.send(UserDto.map(user));
});

router.post("/", (req, res) => {
  const body = req.body;
  const userCreated = body.unqfy.createUsuario(body.username);
  body.unqfy.save(body.dataPath);

  res.status(201);
  res.send(UserDto.map(userCreated));
});

router.delete("/:username", (req, res) => {
  const body = req.body;
  const username = req.params.username;
  body.unqfy.deleteUsuario(username);
  body.unqfy.save(body.dataPath);

  res.status(204).send();
});

router.patch("/:username", (req, res) => {
  const body = req.body;
  const username = req.params.username;
  const usuarioUpdated = body.unqfy.updateUsuario(username);
  body.unqfy.save(body.dataPath);

  res.status(200);
  res.send(UserDto.map(usuarioUpdated));
});

router.get("/:username/tracks", (req, res) => {
  const username = req.params.username;
  const unqfy = req.body.unqfy;
  const tracksListened = unqfy.tracksListened(username);
  res.status(200).send(tracksListened.map((track) => TrackDto.map(track)));
});

router.post("/:username/tracks", (req, res) => {
  const username = req.params.username;
  const trackId = parseInt(req.body.trackId);
  const unqfy = req.body.unqfy;
  const track = unqfy.listenTrack(trackId, username);
  unqfy.save(req.body.dataPath);
  res.status(201).send(TrackDto.map(track));
});

module.exports = router;
