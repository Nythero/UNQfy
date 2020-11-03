class AlbumNameTakenError extends Error{
  constructor(albumName){
    super(`El album con nombre ${albumName} ya existe. Intente otro nombre.`);
    this.name = "AlbumNameTakenError";
  }
}

module.exports = AlbumNameTakenError;
