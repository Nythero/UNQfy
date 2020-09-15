class Album{
  constructor(id, name, year){
    this._id = id;
    this._name = name;
    this._year = year;
    this._tracks = [];
  }
}

module.exports = Album;
