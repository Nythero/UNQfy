const Album = require('./album');
const idManager = require('./idManager');

class Artist {
  constructor(id, name, country) {
    this._id = id;
    this._name = name;
    this._country = country;
    this._albums = [];
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
  set name(newName) {
    this._name = newName;
  }
  set country(newCountry) {
    this._country = newCountry;
  }
  addAlbum(dataAlbum) {
    const album = new Album(idManager.idNewAlbum(this), dataAlbum.name, dataAlbum.year);
    this._albums.push(album);
    return album;
  }
  getAlbumById(id){
    return this._albums.find(album => album.id === id);
  }
  cantidadAlbums(){
    return this._albums.length;
  }
}

module.exports = Artist;
