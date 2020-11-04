const IdManager = {
  _playlistId: 1,
  _bytesIniciales : {
    artist: Math.pow(2,11),
    album: Math.pow(2,6),
    track: Math.pow(2,0)
  },
  idNewArtist(unqfy){
    return (unqfy.newArtistId) * this._bytesIniciales.artist;
  },
  idNewAlbum(artist){
    return artist.id + (artist.newAlbumId()) * this._bytesIniciales.album;
  },
  idNewTrack(album){
    return album.id + (album.newTrackId()) * this._bytesIniciales.track;
  },
  idNewPlaylist() {
    const playlistId = this._playlistId;
    this._playlistId += 1;
    return playlistId;
  },
  getId(field,id){
    return id - (id % this._bytesIniciales[field]);
  },
  equalId(field, firstId, secondId){
    return this.getId(field, firstId) ===  this.getId(field, secondId);
  }
};

module.exports = IdManager;
