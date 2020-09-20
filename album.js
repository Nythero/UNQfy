const Track = require("./track");
const idManager = require("./idManager");
const MatchingObject = require("./matchingObject");

//Errores
const NonexistentTrackError = require("./error/nonexistentTrackError");
const TrackAlreadyOnAlbumError = require("./error/trackAlreadyOnAlbumError");

class Album extends MatchingObject {
  constructor(id, name, year) {
    super("tracks");
    this._id = id;
    this._name = name;
    this._year = year;
    this._tracks = [];
    this._newTrackId = 1;
  }
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
  addTrack(dataTrack) {
    try {
      this._validarTrack(dataTrack);
    } catch (error) {
      if (error instanceof TrackAlreadyOnAlbumError) {
        return error.message;
      } else {
        throw error;
      }
    }
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
    this._tracks = this._tracks.filter((a) => a.id !== id);
    return this._tracks;
  }
  _validarTrack(dataTrack) {
    if (this._tracks.some((track) => track.name === dataTrack.name)) {
      throw new TrackAlreadyOnAlbumError(dataTrack.name, this._name);
    }
  }
  newTrackId() {
    return this._newTrackId++;
  }
  getTrackById(id) {
    const track = this._tracks.find((track) =>
      idManager.equalId("track", id, track.id)
    );
    if (track === undefined) {
      throw new NonexistentTrackError(id);
    }
    return track;
  }
  addIfMatchName(dictionary, name) {
    super.addIfMatch(dictionary.albums, "name", name);
    this.tracks.forEach((track) => track.addIfMatchName(dictionary, name));
  }
}

module.exports = Album;
