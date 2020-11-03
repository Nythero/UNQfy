const { NotFound } = require("../api/utils/errors");

class NonexistentTrackError extends NotFound {
  constructor(trackId){
    super(`No se pudo completar la accion, el track con id ${trackId} no existe`);
    this.name = 'NonexistentTrackError';
  }
}

module.exports = NonexistentTrackError;
