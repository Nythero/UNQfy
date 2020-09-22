# UNQfy

## Primeros pasos
* npm install
* npm test (para correr los tests)

## Uso
Para el uso de unqfy se debe usar la sintaxis
node main.js [comando] [parametros]

Los comandos disponibles con sus respectivos parámetros son:
* addArtist [nombre] [pais]
* deleteArtist [artistId]
* addAlbum [artistId] [nombre] [año]
* deleteAlbum [albumId]
* addTrack [albumId] [nombre] [duracion] [generos como strings] 
* deleteTrack [trackId]
* getArtistById [artistId]
* getArtists
* getAlbumById [albumId]
* getAlbumsByArtist [artistId]
* search [nombre]
* getTrackById [trackId]
* getTracksByAlbum [albumId]
* createPlaylist [nombre] [generos] [duracion]
* deletePlaylist [playlistId]
* getPlaylists
* createUsuario [username]
* getUsuario [username]
* tracksListened [username]
* trackTimesListenedByUser [trackId] [username]
* listenTrack [trackId] [username]
* trackTimesListened [trackId]

## Diagrama UML
[Link al diagrama UML](https://drive.google.com/file/d/1uwzQhLygGmY4_a6f51_WZdYxhqfI1mBD/view?usp=sharing)
