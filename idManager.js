let IdManager = {
  _bytesIniciales : {
    artist: Math.pow(2,11),
    album: Math.pow(2,6),
    track: Math.pow(2,0)
  },
  idNewArtist(unqfy){
    return (unqfy.getArtists().length + 1) * this._bytesIniciales['artist'];
  },
  idNewAlbum(artist){
    return artist.id + (artist.cantidadAlbums() + 1) * this._bytesIniciales['album'];
  },
  idNewTrack(album){
    return album.id + (album.cantidadTracks() + 1) * this._bytesIniciales['track'];
  },
  getId(field,id){
    return id - (id % this._bytesIniciales[field]);
  }
}

module.exports = IdManager;
