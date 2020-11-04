const Track = require("./track");
const idManager = require("../utils/idManager");
const MatchingObject = require("../utils/matchingObject");

//Errores
const NonexistentResourceError = require("../error/nonexistentResourceError");
const ResourceNameTakenError   = require("../error/resourceNameTakenError");

class Album extends MatchingObject {
  constructor(id, name, year) {
    super("tracks");
    this._id = id;
    this._name = name;
    this._year = year;
    this._tracks = [];
    this._newTrackId = 1;
  }
  //Getters
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get year() {
    return this._year;
  }
  get tracks() {
    return this._tracks;
  }
  //Validators
  _validarDisponibilidadNombreTrack(data, accion) {
    if (this._tracks.some((track) => track.name == dataTrack.name)) {
      throw new ResourceNameTakenError("Track", name, accion);
    }
  }
  _validarExistenciaTrack(data, accion){
    if(this._tracks.every(track => track.id !== data)){
      throw new NonexistentResourceError("Track", data, accion);
    }
  }
  addTrack(dataTrack) {
    this._validarDisponibilidadNombreTrack(dataTrack.name, "addTrack");

    const track = new Track(
      idManager.idNewTrack(this),
      dataTrack.name,
      dataTrack.duration,
      dataTrack.genres
    );
    this._tracks.push(track);
    return track;
  }
  deleteTrack(id) {
    this._validarExistenciaTrack(id, "deleteTrack");

    this._tracks = this._tracks.filter((a) => a.id !== id);
    return this._tracks;
  }
  newTrackId() {
    return this._newTrackId++;
  }
  getTrackById(id) {
    this._validarExistenciaTrack(id, "getTrackById");

    const track = this._tracks.find((track) =>
      idManager.equalId("track", id, track.id)
    );
    return track;
  }
  addIfMatchName(dictionary, name) {
    super.addIfMatch(dictionary.albums, "name", name);
    this.tracks.forEach((track) => track.addIfMatchName(dictionary, name));
  }
}

module.exports = Album;
