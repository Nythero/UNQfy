let commandSelectorTrack = {
  addTrack(unqfy, param) {
    const id = parseInt(param[0]);
    const dur = parseInt(param[2]);
    const genres = param.slice(3);
    return unqfy.addTrack(id, { name: param[1], duration: dur, genres });
  },
  deleteTrack(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.deleteTrack(id);
  },
  getTrackById(unqfy, param) {
    const id = parseInt(param[0]);
    return unqfy.getTrackById(id);
  },
};

module.exports = commandSelectorTrack;
