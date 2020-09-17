class Track {
  constructor(id, name, duration, genres){
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
}

module.exports = Track;
