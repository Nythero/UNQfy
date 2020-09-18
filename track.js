const MatchingObject = require('./matchingObject');

class Track extends MatchingObject{
  constructor(id, name, duration, genres){
    super();
    this._id = id;
    this._name = name;
    this._duration = duration;
    this._genres = [].concat(genres);
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
  elementsThatMatch(field, name){
    return [];
  }
}

module.exports = Track;
