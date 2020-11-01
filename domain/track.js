const MatchingObject = require('../utils/matchingObject');

class Track extends MatchingObject{
  constructor(id, name, duration, genres){
    super();
    this._id = id;
    this._name = name;
    this._duration = duration;
    this._genres = [].concat(genres);
    this._timesListened = 0;
    this._lyrics = null;
  }
  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get duration(){
    return this._duration;
  }
  get genres(){
    return this._genres;
  }
  get timesListened() {
    return this._timesListened;
  }
  get lyrics(){
    return this._lyrics;
  }
  set lyrics(value) {
    this._lyrics = value;
  }
  addIfMatchName(dictionary, name){
    super.addIfMatch(dictionary.tracks, 'name', name);
  }
  addIfMatchGenres(array, genres){
    for (let i = 0; i < genres.length; i++){
      if(!array.includes(this)){
        super.addIfMatch(array, 'genres', genres[i]);
      }  
    }
  }
  hasGenre(aGenre) {
    return this._genres.some((g) => g === aGenre);
  }
  listen() {
    this._timesListened += 1;
    return this._timesListened;
  }
}

module.exports = Track;
