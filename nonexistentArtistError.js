class NonexistentArtistError extends Error{
  constructor(field, value){
    super('Nose pudo completar la accion, el artista con ' + field + ' ' + value + ' no existe');
    this.name = 'NonexistentArtistError';
  }
}

module.exports = NonexistentArtistError;
