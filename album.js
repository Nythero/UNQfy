let Track = require('./track');
let idManager = require('./idManager');

class Album{
  constructor(id, name, year){
    this._id = id;
    this._name = name;
    this._year = year;
    this._tracks = [];
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
  cantidadTracks(){
    return this._tracks.length;
  }
}

module.exports = Album;
