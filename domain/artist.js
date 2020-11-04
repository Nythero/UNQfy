const Album = require('./album');
const idManager = require('../utils/idManager');
const MatchingObject = require('../utils/matchingObject');

//Errores
const NonexistentResourceError = require("../error/nonexistentResourceError");
const ResourceNameTakenError = require("../error/resourceNameTakenError");

class Artist extends MatchingObject{
  constructor(id, name, country) {
    super();
    this._id = id;
    this._name = name;
    this._country = country;
    this._albums = [];
    this._newAlbumId = 1;
  }
  //Getters
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
  //Validators
  _validarDisponibilidadNombreAlbum(name, accion){
    if (this._albums.some((album) => album.name == name)) {
      throw new ResourceNameTakenError("Album", name, accion);
    }
  }
  _validarExistenciaAlbum(data, accion){
    if(this._albums.every(album => album.id != data)){
      throw new NonexistentResourceError("Album", data, accion);
    }
  }
  addAlbum(dataAlbum) {
    this._validarDisponibilidadNombreAlbum(dataAlbum.name, "addAlbum");

    const album = new Album(idManager.idNewAlbum(this), dataAlbum.name, dataAlbum.year);
    this._albums.push(album);
    return album;
  }
  deleteAlbum(id) {
    this._validarExistenciaAlbum(id, "deleteAlbum");

    this._albums = this._albums.filter(a => a.id !== id);
    return this._albums;
  }
  updateAlbum(dataAlbum){
    this._validarExistenciaAlbum(dataAlbum.id, "updateAlbum");

    const oldAlbum = this.getAlbumById(dataAlbum.id);
    this.deleteAlbum(dataAlbum.id);
    const albumUpdated = new Album(dataAlbum.id, oldAlbum.name, dataAlbum.year);
    this._albums.push(albumUpdated);
    return albumUpdated;
  }
  getAlbumById(id){
    this._validarExistenciaAlbum(id, "getAlbumById");
    const album = this._albums.find(album => idManager.equalId('album', album.id, id));
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
