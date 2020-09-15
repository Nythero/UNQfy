let commandSelector = {
  addArtist(unqfy, dataArtist){
    unqfy.addArtist(dataArtist);
  },

  getArtistById(unqfy,id){
    console.debug(unqfy.getArtistById(id));
  },
  
  getArtists(unqfy){
    console.debug(unqfy.getArtists());
  },
  addAlbum(unqfy, dataAlbum){
    unqfy.addAlbum(dataAlbum);
  }
}
module.exports = commandSelector;
