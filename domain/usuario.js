class Usuario {
  constructor(username){
    this._username = username;
    this._tracksListened = {};
  }
  get username(){
    return this._username;
  }
  set username(username){
    this._username = username;
  }
  tracksListened(){
    return Object.keys(this._tracksListened).map(id => parseInt(id));
  }
  timesListened(trackId){
    const times = this._tracksListened[trackId];
    return (times === undefined)? 0 : times;
  }
  listenTrack(track){
    track.listen();
    const trackId = track.id;
    const auxObject = {};
    auxObject[trackId] = this.timesListened(trackId) + 1;
    Object.assign(this._tracksListened, auxObject);
  }
}

module.exports = Usuario;
