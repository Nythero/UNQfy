class NonexistentArtistError extends Error{
  constructor(artistId){
    super('Nose pudo completar la accion, el artista con id ' + artistId + ' no existe');
    this.name = 'NonexistentArtistError';
  }
}

module.exports = NonexistentArtistError;
