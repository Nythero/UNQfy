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
    let id = parseInt(dataAlbum[0]);
    unqfy.addAlbum(id, {name: dataAlbum[1], year: dataAlbum[2]});
  }
}

module.exports = commandSelector;
