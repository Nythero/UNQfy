class ArtistDto {
  constructor(id, name, country, albums) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.albums = albums;
  }

  static map(artist) {
    return new ArtistDto(artist.id, artist.name, artist.country, artist.albums);
  }
}

module.exports = ArtistDto;
