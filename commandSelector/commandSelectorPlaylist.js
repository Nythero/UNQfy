let commandSelectorPlaylist = {
  createPlaylist(unqfy, dataPlaylist) {
    const name = dataPlaylist[0];
    const duration = parseInt(dataPlaylist[1]);
    const genres = dataPlaylist.slice(2);
    return unqfy.createPlaylist(name, genres, duration);
  },
  getPlaylistById(unqfy, idParam) {
    const id = parseInt(idParam[0]);
    return unqfy.getPlaylistById(id);
  },
  deletePlaylist(unqfy, idParam) {
    let id = parseInt(idParam[0]);
    return unqfy.deletePlaylist(id);
  },
  getPlaylists(unqfy) {
    return unqfy.getPlaylists();
  },
};

module.exports = commandSelectorPlaylist;
