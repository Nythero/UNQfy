const commandSelector = {
  addArtist(unqfy, dataArtist) {
    let params = { name: dataArtist[0], country: dataArtist[1] };
    unqfy.addArtist(params);
  },

  deleteArtist(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    unqfy.deleteArtist(id);
  },

  getArtistById(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    console.debug(unqfy.getArtistById(id));
  },

  getArtists(unqfy) {
    console.debug(unqfy.getArtists());
  },

  addAlbum(unqfy, dataAlbum){
    unqfy.addAlbum(dataAlbum);
  }
}

module.exports = commandSelector;
