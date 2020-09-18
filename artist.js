const Album = require('./album');
const idManager = require('./idManager');

class Artist {
  constructor(id, name, country) {
    this._id = id;
    this._name = name;
    this._country = country;
    this._albums = [];
    this._newAlbumId = 1;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get country() {
    return this._country;
  }
  albums() {
    return this._albums;
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
    return this._albums.find(album => idManager.equalId('album', album.id, id));
  }
  newAlbumId(){
    return this._newAlbumId++;
  }
}

module.exports = Artist;
