class TrackDto {
  constructor(id, name, duration, genres, timesListened){
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.genres = genres;
    this.timesListened = timesListened;
  }
  
  static map(track){
    return new TrackDto(track.id, track.name, track.duration, track.genres, track.timesListened);
  }
}

module.exports = TrackDto;
