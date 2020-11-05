const express = require("express");
const router = express.Router();
const PlaylistDto = require("../dtos/playlistDto");

//Crear Playlist
router.post('/', (req, res) => {
  const unqfy = req.body.unqfy;
  let playlist;
  if(req.body.tracks !== undefined){
    playlist = unqfy.createPlaylistWithTracks(req.body.name, req.body.tracks);
  }
  else{
    playlist = unqfy.createPlaylist(req.body.name, req.body.genres, req.body.maxDuration);
  }
  unqfy.save(req.body.dataPath);
  res.status(201).send(PlaylistDto.map(playlist));
});

//Obtener Playlist
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const playlist = req.body.unqfy.getPlaylistById(id);

  res.send(PlaylistDto.map(playlist));
});

//Eliminar Playlist
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const unqfy = req.body.unqfy;
  unqfy.deletePlaylist(id);
  unqfy.save(req.body.dataPath);
  res.status(204).send();
});

//Buscar Playlist
router.get('/', (req, res) => {
  let playlists = req.body.unqfy.getPlaylists();
  const dlt = req.query.durationLT;
  const dgt = req.query.durationGT;
  const containsName = (playlist) => req.query.name === undefined || playlist.name.toLowerCase().includes(req.query.name.toLowerCase());
  const durLowerThan  = (playlist) => dlt === undefined || playlist.duration() < parseInt(dlt);
  const durHigherThan  = (playlist) => dgt === undefined || playlist.duration() > parseInt(dgt);
  playlists = playlists.filter(playlist => containsName(playlist) && durLowerThan(playlist) && durHigherThan(playlist));
  res.send(playlists.map(playlist => PlaylistDto.map(playlist)));
});

module.exports = router;
