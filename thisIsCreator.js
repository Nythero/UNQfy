const NotEnoughTracksError = require('./error/notEnoughTracksError');

const thisIsCreator = {
  createThisIs(artist){
    const thisIs = [];
    try{
      this._validarArtista(artist);
    }
    catch (error){
      if(error instanceof NotEnoughTracksError){
        return error.message;
      }
      else{
        throw error;
      }
    } 
    let tracks = artist.albums.flatMap(album => album.tracks); 
    
    for(let i = 0; i < 3; i++){
      const track = this._trackMasEscuchada(tracks);
      thisIs.push(track);
      tracks = tracks.filter(t => t != track);
    }
    return thisIs;
  },
  _trackMasEscuchada(tracks){
    return tracks.reduce((max, track) => (track.timesListened > max.timesListened)? track : max);
  },
  _validarArtista(artist){
    if(artist.albums.flatMap(album => album.tracks).length < 3){
      throw new NotEnoughTracksError(artist);
    }
  }
}

module.exports = thisIsCreator;
