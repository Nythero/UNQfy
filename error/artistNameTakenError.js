const { Conflict } = require("../api/utils/errors");

class ArtistNameTakenError extends Conflict {
  constructor(artistName){
    super(`El artista con nombre ${artistName} ya existe. Intente otro nombre.`);
    this.name = "ArtistNameTakenError";
  }
}

module.exports = ArtistNameTakenError;
