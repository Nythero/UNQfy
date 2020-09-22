class NotEnoughTracksError extends Error{
  constructor(artist){
    super("El artista con id " + artist.id + " no tiene mas de 3 canciones");
    this.name = "NotEnoughTracksError";
  }
}

module.exports = NotEnoughTracksError;
