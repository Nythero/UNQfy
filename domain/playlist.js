const MatchingObject = require("../utils/matchingObject");
const idManager = require("../utils/idManager");

class Playlist extends MatchingObject {
  constructor(name) {
    super();
    this._id = idManager.idNewPlaylist();
    this._name = name;
    this._tracks = [];
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get tracks() {
    return this._tracks;
  }
  addTrack(track) {
    this._tracks.push(track);
  }
  deleteTrack(id) {
    this._tracks = this._tracks.filter((a) => a.id !== id);
    return this._tracks;
  }
  hasTrack(track) {
      return this._tracks.some((t) => t.id === track.id);
  }
  duration() {
    return this._tracks.reduce((acc, t) => acc + t.duration, 0);
  }
  addIfMatchName(dictionary, name){
    super.addIfMatch(dictionary.playlists, 'name', name);
  }
}

module.exports = Playlist;
