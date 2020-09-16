let commandSelectorAlbum = {
  addAlbum(unqfy, dataAlbum){
    let id = parseInt(dataAlbum[0]);
    unqfy.addAlbum(id, {name: dataAlbum[1], year: dataAlbum[2]});
  },
  getAlbumById(unqfy, dataAlbum){
    let id = parseInt(dataAlbum[0]);
    console.debug(unqfy.getAlbumById(id));
  }
}

module.exports = commandSelectorAlbum;
