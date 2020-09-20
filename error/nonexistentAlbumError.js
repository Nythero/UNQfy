class NonexistentAlbumError extends Error{
  constructor(albumId){
    super(`No se pudo completar la accion, el album con id ${albumId} no existe`);
    this.name = 'NonexistentAlbumError';   
  }
}

module.exports = NonexistentAlbumError;
