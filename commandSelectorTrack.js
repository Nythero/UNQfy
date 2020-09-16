let commandSelectorTrack = {
  addTrack(unqfy, param){
    const id = parseInt(param[0]);
    const dur = parseInt(param[2]);
    const genres = param.slice(3);
    unqfy.addTrack(id, {name: param[1], duration: dur, genres});
  },
  getTrackById(unqfy, param){
    const id = parseInt(param[0]);
    console.debug(unqfy.getTrackById(id));
  }
}

module.exports = commandSelectorTrack;
