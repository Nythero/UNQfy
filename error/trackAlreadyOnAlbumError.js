class TrackAlreadyOnAlbumError extends Error{
  constructor(trackName, albumName){
    super("El track " + trackName + " ya existe en el album " + albumName);
    this.name = "TrackAlreadyOnAlbumError";
  }
}

module.exports = TrackAlreadyOnAlbumError;
