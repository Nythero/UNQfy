class NonexistentTrackError extends Error{
  constructor(trackId){
    super(`No se pudo completar la accion, el track con id ${trackId} no existe`);
    this.name = 'NonexistentTrackError';
  }
}

module.exports = NonexistentTrackError;
