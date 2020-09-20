let commandSelectorAlbum = {
  addAlbum(unqfy, dataAlbum) {
    let artistId = parseInt(dataAlbum[0]);
    return unqfy.addAlbum(artistId, { name: dataAlbum[1], year: dataAlbum[2] });
  },
  getAlbumById(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.getAlbumById(id);
  },
  deleteAlbum(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.deleteAlbum(id);
  },
  getAlbumsByArtist(unqfy, idParam) {
    let artistId = parseInt(idParam[0]);
    return unqfy.getAlbumsByArtist(artistId);
  },
};

module.exports = commandSelectorAlbum;
