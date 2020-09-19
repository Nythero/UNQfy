let commandSelectorTrack = {
  addTrack(unqfy, param){
    const id = parseInt(param[0]);
    const dur = parseInt(param[2]);
    const genres = param.slice(3);
    return unqfy.addTrack(id, {name: param[1], duration: dur, genres});
  },
  getTrackById(unqfy, param){
    const id = parseInt(param[0]);
    return unqfy.getTrackById(id);
  },
  getTracksByGenre(unqfy, param){
    const genres = param;
    return unqfy.getTracksMatchingGenres(genres);
  }
}

module.exports = commandSelectorTrack;
