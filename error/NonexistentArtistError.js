const { NotFound } = require("../api/utils/errors");

class NonexistentArtistError extends NotFound {
  constructor(field, value){
    super(`No se pudo completar la accion, el artista con ${field} ${value} no existe`);
    this.name = 'NonexistentArtistError';
  }
}

module.exports = NonexistentArtistError;
