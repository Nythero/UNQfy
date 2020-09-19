
const picklify = require('picklify'); // para cargar/guarfar unqfy
const fs = require('fs'); // para cargar/guarfar unqfy
const Artist = require('./artist');
const idManager = require('./idManager');
const Album = require('./album');
const Track = require('./track');
const NonexistentArtistError = require('./nonexistentArtistError');
const NonexistentAlbumError = require('./nonexistentAlbumError');
const NonexistentTrackError = require('./nonexistentTrackError');

class UNQfy {
  
  constructor(){
    this._artistas = [];
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
    const artistaNuevo = new Artist(idManager.idNewArtist(this), artistData.name, artistData.country);
    this._artistas.push(artistaNuevo);
    return artistaNuevo;
  }

  // id: id del artista a eliminar
  deleteArtist(id) {
    /* Elimina de unqfy el artista con el id indicado */
    let elemIndex = this._artistas.indexOf(id);
    this._artistas.splice(elemIndex, 1);
    //TODO: DELETE
    console.debug(this._artistas);
    //TODO.
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
    try {
      return artist.addAlbum(albumData);
    }
    catch (error) {
      if (error instanceof TypeError){
        return artist;
      }
      else{
        throw error;
      }
    }   
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
    try {
      return album.addTrack(trackData);
    }
    catch (error){
      if (error instanceof TypeError){
        return album;
      }    
      else {
        throw error;
      }
    }
  }

  getArtistById(id) {
    const artist = this._artistas.find(a => idManager.equalId('artist', id, a.id));
    try {
      if (artist === undefined){
        throw new NonexistentArtistError('id', id);
      }
    }
    catch (error){
      if (error instanceof NonexistentArtistError){
        return error.message;
      }
      else {
        throw error;
      }
    }
    return artist;
  }

  getArtists() {
    return this._artistas;
  }

  getAlbumById(id) {
    const artist = this.getArtistById(id);
    try {
      return artist.getAlbumById(id);
    }
    catch (error){
      if (error instanceof TypeError){
        return artist;
      }
      else if (error instanceof NonexistentAlbumError){
        return error.message;
      }
      else {
        throw error;
      }
    }
  }

  search(name){
    const matchingArtists = this._artistas.filter(artist => artist.matchOrElementsMatch('name', name));
    return matchingArtists.flatMap(artist => artist.matchingElements('name', name));
  }

  getTrackById(id) {
    const album = this.getAlbumById(id);
    try {
      return album.getTrackById(id);
    }
    catch (error){
      if (error instanceof TypeError){
        return album;
      }
      else if (error instanceof NonexistentTrackError){
        return error.message;
      }
      else {
        throw error;
      }
    }
  }

  getPlaylistById(id) {

  }

  // genres: array de generos(strings)
  // retorna: los tracks que contenga alguno de los generos en el parametro genres
  getTracksMatchingGenres(genres) {
    let tracks = [];
    for (let i = 0; i < genres.length; i++){
      tracks = tracks.concat(this._artistas.flatMap(artist => artist.matchingElements('genres', genres[i])));
    }
    return tracks;
  }

  // artistName: nombre de artista(string)
  // retorna: los tracks interpredatos por el artista con nombre artistName
  getTracksMatchingArtist(artistName) {
    const artist = this._artistas.find(artista => artistName == artista.name);

    try {
      if (artist === undefined){
        throw new NonexistentArtistError('name', artistName);
      }
    }
    catch (error){
      if (error instanceof NonexistentArtistError){
        return error.message;
      }
      else {
        throw error;
      }
    }
    return artist.albums.flatMap(album => album.tracks);
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

  }

  save(filename) {
    const serializedData = picklify.picklify(this);
    fs.writeFileSync(filename, JSON.stringify(serializedData, null, 2));
  }

  static load(filename) {
    const serializedData = fs.readFileSync(filename, {encoding: 'utf-8'});
    //COMPLETAR POR EL ALUMNO: Agregar a la lista todas las clases que necesitan ser instanciadas
    const classes = [UNQfy, Artist, Album, Track];
    return picklify.unpicklify(JSON.parse(serializedData), classes);
  }

  get newArtistId(){
    return this._newArtistId++;
  }
}

// COMPLETAR POR EL ALUMNO: exportar todas las clases que necesiten ser utilizadas desde un modulo cliente
module.exports = {
  UNQfy: UNQfy,
};

