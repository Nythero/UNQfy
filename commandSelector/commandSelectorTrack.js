let commandSelectorTrack = {
  addTrack : (unqfy, dataTrack) => {
    const id = parseInt(dataTrack[0]);
    const dur = parseInt(dataTrack[2]);
    const genres = dataTrack.slice(3);
    return unqfy.addTrack(id, { name: dataTrack[1], duration: dur, genres });
  },
  deleteTrack : (unqfy, idParam) => {
    let id = parseInt(idParam[0]);
    return unqfy.deleteTrack(id);
  },
  getTrackById : (unqfy, idParam) => {
    const id = parseInt(idParam[0]);
    return unqfy.getTrackById(id);
  },
  getTracksByGenre : (unqfy, param) => {
    const genres = param;
    return unqfy.getTracksMatchingGenres(genres);
  },
  getTracksByAlbum : (unqfy, idParam) => {
    let albumId = parseInt(idParam[0]);
    return unqfy.getTracksByAlbum(albumId);
  },
  trackTimesListened : (unqfy, idParam) => {
    let trackId = parseInt(idParam[0]);
    return unqfy.trackTimesListened(trackId);
  }
}

module.exports = commandSelectorTrack;
