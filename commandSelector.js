let commandSelector = {
  addArtist(unqfy, dataArtist){
    unqfy.addArtist(dataArtist);
  },

  getArtistById(unqfy,id){
    console.debug(unqfy.getArtistById(id));
  },
  
  getArtists(unqfy){
    console.debug(unqfy.getArtists());
  }
}
module.exports = commandSelector;
