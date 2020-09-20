class ArtistNameTakenError extends Error{
  constructor(artistName){
    super(`El artista con nombre ${artistName} ya existe. Intente otro nombre.`);
    this.name = "ArtistNameTakenError";
  }
}

module.exports = ArtistNameTakenError;
