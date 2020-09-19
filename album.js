const Track = require('./track');
const idManager = require('./idManager');
const NonexistentTrackError = require('./nonexistentTrackError');
const MatchingObject = require('./matchingObject');

class Album extends MatchingObject{
  constructor(id, name, year){
    super('tracks');
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
  get tracks(){
    return this._tracks;
  }
  addTrack(dataTrack){
    const track = new Track(idManager.idNewTrack(this), dataTrack.name, dataTrack.duration, dataTrack.genres);       
    this._tracks.push(track);
    return track;
  }
  newTrackId(){
    return this._newTrackId++;
  }
  getTrackById(id){
    const track = this._tracks.find(track => idManager.equalId('track', id, track.id));
    if(track === undefined){
      throw new NonexistentTrackError(id);
    }
    return track;
  }
}

module.exports = Album;
