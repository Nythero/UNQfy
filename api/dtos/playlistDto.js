const TrackDto = require("../dtos/trackDto");

class playlistDto {
  constructor(id, name, duration, tracks){
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.tracks = tracks.map(track => TrackDto.map(track));
  }

  static map(playlist){
    return new playlistDto(playlist.id, playlist.name, playlist.duration(), playlist.tracks);     
  }
}

module.exports = playlistDto;
