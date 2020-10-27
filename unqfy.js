const picklify = require("picklify"); // para cargar/guarfar unqfy
const fs = require("fs"); // para cargar/guarfar unqfy
const Artist = require("./artist");
const idManager = require("./idManager");
const Album = require("./album");
const Track = require("./track");
const Playlist = require("./playlist");
const Usuario = require("./usuario");
const thisIsCreator = require("./thisIsCreator");
const unqfyRequester = require("./unqfyRequester");

//Errores
const NonexistentArtistError = require("./error/nonexistentArtistError");
const NonexistentAlbumError = require("./error/nonexistentAlbumError");
const NonexistentTrackError = require("./error/nonexistentTrackError");
const ArtistNameTakenError = require("./error/artistNameTakenError");
const NonexistentPlaylistError = require("./error/nonexistentPlaylistError");
const UserNameTakenError = require("./error/userNameTakenError");
const NonexistentUserError = require("./error/nonexistentUserError");

class UNQfy {
  constructor() {
    this._playlists = [];
    this._artistas = [];
    this._usuarios = [];
    this._newArtistId = 1;
  }

  // artistData: objeto JS con los datos necesarios para crear un artista
  //   artistData.name (string)
  //   artistData.country (string)
  // retorna: el nuevo artista creado
  addArtist(artistData) {
    /* Crea un artista y lo agrega a unqfy.
  El objeto artista creado debe soportar (al menos):
    - una propiedad name (string)
    - una propiedad country (string)
  */
    const artistaNuevo = new Artist(
      idManager.idNewArtist(this),
      artistData.name,
      artistData.country
    );
    this._artistas.push(artistaNuevo);
    return artistaNuevo;
  }

  _validarNombreArtista(name) {
    if (this._artistas.some((artist) => artist.name == name)) {
      throw new ArtistNameTakenError(name);
    }
  }

  // id: id del artista a eliminar
  deleteArtist(id) {
    /* Elimina de unqfy el artista con el id indicado */
    this._artistas = this._artistas.filter((a) => a.id !== id);
    return this._artistas;
  }

  // albumData: objeto JS con los datos necesarios para crear un album
  //   albumData.name (string)
  //   albumData.year (number)
  // retorna: el nuevo album creado
  addAlbum(artistId, albumData) {
    /* Crea un album y lo agrega al artista con id artistId.
    El objeto album creado debe tener (al menos):
     - una propiedad name (string)
     - una propiedad year (number)
  */
    const artist = this.getArtistById(artistId);
    return artist.addAlbum(albumData);
  }

  // id: id del album a eliminar
  deleteAlbum(id) {
    /* Elimina de unqfy el album con el id indicado */
    const albums = this.getArtistById(id).deleteAlbum(id);
    return albums;
  }

  // trackData: objeto JS con los datos necesarios para crear un track
  //   trackData.name (string)
  //   trackData.duration (number)
  //   trackData.genres (lista de strings)
  // retorna: el nuevo track creado
  addTrack(albumId, trackData) {
    /* Crea un track y lo agrega al album con id albumId.
  El objeto track creado debe tener (al menos):
      - una propiedad name (string),
      - una propiedad duration (number),
      - una propiedad genres (lista de strings)
  */
    const album = this.getAlbumById(albumId);
    return album.addTrack(trackData);
  }

  // id: id del track a eliminar
  deleteTrack(id) {
    /* Elimina de unqfy el track con el id indicado */
    const tracks = this.getAlbumById(id).deleteTrack(id);
    return tracks;
  }

  getArtistById(id) {
    const artist = this._artistas.find((a) =>
      idManager.equalId("artist", id, a.id)
    );
    if (artist === undefined) {
      throw new NonexistentArtistError("id", id);
    }
    return artist;
  }

  getArtists() {
    return this._artistas;
  }

  getAlbumById(id) {
    const artist = this.getArtistById(id);
    return artist.getAlbumById(id);
  }

  getAlbumsByArtist(artistId) {
    return this.getArtistById(artistId).albums;
  }

  searchByName(name) {
    const matchs = {
      artists: [],
      albums: [],
      tracks: [],
      playlists: [],
    };
    this._artistas.forEach((artist) => artist.addIfMatchName(matchs, name));
    this._playlists.forEach((playlist) =>
      playlist.addIfMatchName(matchs, name)
    );
    return matchs;
  }

  getTrackById(id) {
    const album = this.getAlbumById(id);
    return album.getTrackById(id);
  }

  getTracksByAlbum(albumId) {
    return this.getAlbumById(albumId).tracks;
  }

  getPlaylistById(id) {
    const playlist = this._playlists.find((p) => p.id === id);
    if (playlist === undefined) {
      throw new NonexistentPlaylistError("id", id);
    }
    return playlist;
  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {
    const tracks = [];
    this._getTracks().forEach((track) =>
      track.addIfMatchGenres(tracks, genres)
    );
    return tracks;
  }

  _getTracks() {
    let tracks = [];
    for (let x = 0; x < this._artistas.length; x++) {
      tracks = tracks.concat(
        this.getTracksMatchingArtist(this._artistas[x].name)
      );
    }
    return tracks;
  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {
    const artist = this._artistas.find(
      (artista) => artistName === artista.name
    );

    if (artist === undefined) {
      throw new NonexistentArtistError("name", artistName);
    }

    return artist.albums.flatMap((album) => album.tracks);
  }

  // name: nombre de la playlist
  // genresToInclude: array de generos
  // maxDuration: duración en segundos
  // retorna: la nueva playlist creada
  createPlaylist(name, genresToInclude, maxDuration) {
    /*** Crea una playlist y la agrega a unqfy. ***
    El objeto playlist creado debe soportar (al menos):
      * una propiedad name (string)
      * un metodo duration() que retorne la duración de la playlist.
      * un metodo hasTrack(aTrack) que retorna true si aTrack se encuentra en la playlist.
    */
    const playlist = new Playlist(name);
    artist_loop: for (let i = 0; i < this._artistas.length; i++) {
      const albums = this._artistas[i].albums;
      for (let j = 0; j < albums.length; j++) {
        const tracks = albums[j].tracks;
        for (let k = 0; k < tracks.length; k++) {
          const track = tracks[k];
          if (playlist.duration() + track.duration <= maxDuration) {
            if (genresToInclude.some((g) => track.hasGenre(g))) {
              playlist.addTrack(track);
              if (playlist.duration() === maxDuration) break artist_loop;
            }
          }
        }
      }
    }
    this._playlists.push(playlist);
    return playlist;
  }

  // id: id del artista a eliminar
  deletePlaylist(id) {
    /* Elimina de unqfy la playlist con el id indicado */
    this._playlists = this._playlists.filter((p) => p.id !== id);
    return this._playlists;
  }

  getPlaylists() {
    return this._playlists;
  }

  // username: nombre del usuario (string)
  // retorna: el nuevo usuario creado
  createUsuario(username) {
    /* Crea un artista y lo agrega a unqfy. */
    this._validarUsername(username);

    const usuarioNuevo = new Usuario(username);
    this._usuarios.push(usuarioNuevo);
    return usuarioNuevo;
  }

  _validarUsername(username) {
    if (this._usuarios.some((u) => u.username === username)) {
      throw new UserNameTakenError(username);
    }
  }

  getUsuario(username) {
    const user = this._usuarios.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (user === undefined) {
      throw new NonexistentUserError(username);
    }

    return user;
  }

  tracksListened(username) {
    const user = this.getUsuario(username);
    const listenedTrackIds = user.tracksListened();
    return listenedTrackIds.map((trackId) => this.getTrackById(trackId).name);
  }

  trackTimesListenedByUser(trackId, username) {
    const user = this.getUsuario(username);
    return user.timesListened(trackId);
  }

  listenTrack(trackId, username) {
    const user = this.getUsuario(username);
    const track = this.getTrackById(trackId);
    user.listenTrack(track);
    return track;
  }

  trackTimesListened(trackId) {
    const track = this.getTrackById(trackId);
    return track.timesListened;
  }

  getThisIs(artistId) {
    const artist = this.getArtistById(artistId);
    return thisIsCreator.createThisIs(artist);
  }

  getAlbumsForArtist(artistName) {
    const artist = this._artistas.find(
      (artista) => artistName === artista.name
    );

    if (artist === undefined) {
      throw new NonexistentArtistError("name", artistName);
    }

    return artist.albums.map((album) => album.name);
  }

  populateAlbumsForArtist(artistName) {
    unqfyRequester
      .requestSpotify("https://api.spotify.com/v1/search", {
        q: artistName,
        type: "artist",
      })
      .then((message) => {
        const artists = message.artists.items;
        const artistId = artists[0].id;
        return unqfyRequester.requestSpotify(
          "https://api.spotify.com/v1/artists/" + artistId + "/albums",
          {}
        );
      })
      .then((message) => {
        const albums = message.items;
        const albumsData = albums.map((album) => {
          return {
            name: album.name,
            year: album.release_date.substring(0, 4),
          };
        });
        const artist = this._artistas.find(
          (artista) => artista.name == artistName
        );
        albumsData.forEach((albumData) => artist.addAlbum(albumData));
        this.save("data.json");
      })
      .catch((error) => console.log(error.message));
  }

  save(filename) {
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, { encoding: "utf-8" });
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UNQfy, Artist, Album, Track, Playlist, Usuario];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }

  get newArtistId() {
    return this._newArtistId++;
  }
}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UNQfy: UNQfy,
};
