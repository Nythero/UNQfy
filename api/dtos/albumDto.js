class AlbumDto {
  constructor(id, name, year, tracks) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.tracks = tracks;
  }

  static map(album) {
    return new AlbumDto(album.id, album.name, album.year, album.tracks);
  }
}

module.exports = AlbumDto;
