let Track = require('./track');
let idManager = require('./idManager');

class Album{
  constructor(id, name, year){
    this._id = id;
    this._name = name;
    this._year = year;
    this._tracks = [];
    this._newTrackId = 1;
  }
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get year(){
    return this._year;
  }
  addTrack(dataTrack){
    const track = new Track(idManager.idNewTrack(this), dataTrack.name, dataTrack.duration, dataTrack.genres);       
    this._tracks.push(track);
    return track;
  }
  deleteTrack(id) {
    this._tracks = this._tracks.filter(a => a.id !== id);
    return this._tracks;
  }
  newTrackId(){
    return this._newTrackId++;
  }
  getTrackById(id){
    return this._tracks.find(track => idManager.equalId('track', id, track.id));
  }
}

module.exports = Album;
