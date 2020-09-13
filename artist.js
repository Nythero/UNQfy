class Artist{
    constructor(name, string, country){
        this._name = name;
        this._country = country;
        this._albums = [];
    }
    name(){
        return this._name;
    }
    country(){
        return this._country;
    }
    albums(){
        return this._albums;
    }
    name(newName){
        this.name = newName;
    }
    country(newCountry){
        this.country = newCountry;
    }
    addAlbum(){
        //TODO
    }
}

module.exports = Artist;
