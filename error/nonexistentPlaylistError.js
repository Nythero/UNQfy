class NonexistentPlaylistError extends Error{
    constructor(playlistId){
      super(`No se pudo completar la accion, la playlist con id ${playlistId} no existe`);
      this.name = 'NonexistentPlaylistError';
    }
  }
  
  module.exports = NonexistentPlaylistError;
  