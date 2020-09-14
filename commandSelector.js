class CommandSelector {
  static addArtist(unqfy, dataArtist){
    unqfy.addArtist(dataArtist);
  }
  
  static getArtistById(unqfy,id){
    console.debug(unqfy.getArtistById(id));
  }
  
  static getArtists(unqfy){
    console.debug(unqfy.getArtists());
  }
}

module.exports = CommandSelector;
