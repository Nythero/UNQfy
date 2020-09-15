const commandSelector = {
  addArtist(unqfy, dataArtist){
    unqfy.addArtist(dataArtist);
  },

  deleteArtist(unqfy, paramId) {
    let id = this.getIdFromParam(paramId);
    unqfy.deleteArtist(id);
  },

  getArtistById(unqfy, paramId){
    let id = this.getIdFromParam(paramId);
    console.debug(unqfy.getArtistById(id));
  },
  
  getArtists(unqfy){
    console.debug(unqfy.getArtists());
  },

  getIdFromParam(paramId) {
    return parseInt(Object.keys(paramId)[0]);
  }
}
module.exports = commandSelector;
