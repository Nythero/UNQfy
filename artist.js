const Album = require('./album');
const idManager = require('./idManager');
const NonexistentAlbumError = require('./nonexistentAlbumError');
const MatchingObject = require('./matchingObject');

class Artist extends MatchingObject{
  constructor(id, name, country) {
    super("albums");
    this._id = id;
    this._name = name;
    this._country = country;
    this._albums = [];
    this._newAlbumId = 1;
  }
  get id() {
    return this._id;
  }
  get albums() {
    return this._albums;
  }
  get name(){
    return this._name;
  }
  addAlbum(dataAlbum) {
    const album = new Album(idManager.idNewAlbum(this), dataAlbum.name, dataAlbum.year);
    this._albums.push(album);
    return album;
  }
  getAlbumById(id){
    const album = this._albums.find(album => idManager.equalId('album', album.id, id));
    if (album === undefined){
      throw new NonexistentAlbumError(id);
    }
    return album;
  }
  newAlbumId(){
    return this._newAlbumId++;
  }
}

module.exports = Artist;
