const AlbumDto = require("./albumDto");

class ArtistDto {
  constructor(id, name, country, albums) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.albums = albums.map((a) => AlbumDto.map(a));
  }

  static map(artist) {
    return new ArtistDto(artist.id, artist.name, artist.country, artist.albums);
  }
}

module.exports = ArtistDto;
