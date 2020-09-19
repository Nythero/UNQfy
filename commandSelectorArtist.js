let commandSelectorArtist = {
  addArtist(unqfy, dataArtist) {
    let params = { name: dataArtist[0], country: dataArtist[1] };
    return unqfy.addArtist(params);
  },

  deleteArtist(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.deleteArtist(id);
  },

  getArtistById(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.getArtistById(id);
  },

  getArtists(unqfy) {
    return unqfy.getArtists();
  },
};

module.exports = commandSelectorArtist;
