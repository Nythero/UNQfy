const Album = require('./album');
const idManager = require('../utils/idManager');
const MatchingObject = require('../utils/matchingObject');

//Errores
const NonexistentAlbumError = require('../error/nonexistentAlbumError');

class Artist extends MatchingObject{
  constructor(id, name, country) {
    super();
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
  get country(){
    return this._country;
  }
  addAlbum(dataAlbum) {
    const album = new Album(idManager.idNewAlbum(this), dataAlbum.name, dataAlbum.year);
    this._albums.push(album);
    return album;
  }
  deleteAlbum(id) {
    this._albums = this._albums.filter(a => a.id !== id);
    return this._albums;
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
  addIfMatchName(dictionary, name){
    super.addIfMatch(dictionary.artists, 'name', name);
    this.albums.forEach(album => album.addIfMatchName(dictionary, name));
  }
}

module.exports = Artist;
