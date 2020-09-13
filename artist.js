class Artist{
  constructor(name, country){
    this._name = name;
    this._country = country;
    this._albums = [];
  }
  get name(){
    return this._name;
  }
  get country(){
    return this._country;
  }
  albums(){
    return this._albums;
  }
  set name(newName){
    this._name = newName;
  }
  set country(newCountry){
    this._country = newCountry;
  }
  addAlbum(){
    //TODO
  }
}

module.exports = Artist;
