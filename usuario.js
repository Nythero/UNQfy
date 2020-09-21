class Usuario {
  constructor(){
    this._tracksListened = {};
  }
  tracksListened(){
    return this._tracksListened.keys();
  }
  timesListened(trackName){
    const times = this._tracksListened[trackName];
    return (times === undefined)? 0 : times;
  }
  listenTrack(track){
    const trackName = track.name;
    const auxObject = {};
    auxObject[trackName] = this.timesListened(trackName) + 1;
    Object.assign(this._tracksListened, auxObject);
  }
}

module.exports = Usuario;
