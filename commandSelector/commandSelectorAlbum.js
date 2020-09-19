let commandSelectorAlbum = {
  addAlbum(unqfy, dataAlbum) {
    let id = parseInt(dataAlbum[0]);
    return unqfy.addAlbum(id, { name: dataAlbum[1], year: dataAlbum[2] });
  },
  getAlbumById(unqfy, dataAlbum) {
    let id = parseInt(dataAlbum[0]);
    return unqfy.getAlbumById(id);
  },
  deleteAlbum(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.deleteAlbum(id);
  },
};

module.exports = commandSelectorAlbum;
