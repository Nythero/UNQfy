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
  const id = req.params.id;
  const playlist = req.body.unqfy.getPlaylistById(id);

  res.send(PlaylistDto.map(playlist));
});

//Eliminar Playlist
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const unqfy = req.body.unqfy;
  unqfy.deletePlaylist(id);
  unqfy.save(req.body.dataPath);
  res.status(204);
});

//Buscar Playlist
router.get('/', (req, res) => {
  let playlists = req.body.unqfy.getPlaylists();
  const containsName = (playlist) => req.query.name === undefined || playlist.name.includes(req.query.name);
  const durLowerThan  = (playlist) => req.query.durationLT === undefined || playlist.duration < req.query.durationLT;
  const durHigherThan  = (playlist) => req.query.durationGT === undefined || playlist.duration > req.query.durationGT;
  console.log(playlists);
  res.send(playlists.filter(playlist => 
    containsName(playlist) && 
    durLowerThan(playlist) && 
    durHigherThan(playlist)));
});

module.exports = router;
