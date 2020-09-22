let commandSelectorUsuario = {
  createUsuario(unqfy, dataUsuario) {
    const username = dataUsuario[0];
    return unqfy.createUsuario(username);
  },
  getUsuario(unqfy, dataUsuario) {
    const username = dataUsuario[0];
    return unqfy.getUsuario(username);
  },
  tracksListened(unqfy, dataUsuario) {
    const usernane = dataUsuario[0];
    return unqfy.tracksListened(usernane);
  },
  trackTimesListenedByUser(unqfy, params) {
    const trackId = parseInt(params[0]);
    const username = params[1];
    return unqfy.trackTimesListenedByUser(trackId, username);
  },
  listenTrack(unqfy, params) {
    const trackId = parseInt(params[0]);
    const username = params[1];
    return unqfy.listenTrack(trackId, username);
  },
};

module.exports = commandSelectorUsuario;
