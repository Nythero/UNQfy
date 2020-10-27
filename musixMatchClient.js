const rp = require("request-promise");

const BASE_URL = "http://api.musixmatch.com/ws/1.1";
const API_KEY = "fa29e650d5f2618d4f314780014d54b0";

const musixMatchClient = {
  searchArtistByName: (artistName) => {
    const options = {
      uri: BASE_URL + "/artist.search",
      qs: {
        apikey: API_KEY,
        q_artist: artistName,
      },
      json: true
    };

    rp.get(options)
      .then((response) => {
        const header = response.message.header;
        const body = response.message.body;
        if (header.status_code !== 200) {
          throw new Error("error while searching an artist.");
        }

        const artistFound = body.artist_list[0];
        console.debug(`Artist found: ${JSON.stringify(artistFound)}`);
        return artistFound;
      })
      .catch((error) => {
        console.log("something went bad.", error);
      });
  },

  searchTrack: (trackName, artistId) => {
    const options = {
      uri: BASE_URL + "/track.search",
      qs: {
        apikey: API_KEY,
        q_track: trackName,
        f_artist_id: artistId
      },
      json: true
    };

    rp.get(options)
      .then((response) => {
        const header = response.message.header;
        const body = response.message.body;
        if (header.status_code !== 200) {
          throw new Error("error while searching a track.");
        }

        const trackFound = body.track_list[0];
        console.debug(`Track found: ${JSON.stringify(trackFound)}`);
        return trackFound;
      })
      .catch((error) => {
        console.log("something went bad.", error);
      });
  },

  getTrackLyrics: (trackId) => {
    const options = {
      uri: BASE_URL + "/track.lyrics.get",
      qs: {
        apikey: API_KEY,
        track_id: trackId
      },
      json: true
    };

    rp.get(options)
      .then((response) => {
        const header = response.message.header;
        const body = response.message.body;
        if (header.status_code !== 200) {
          throw new Error("error while searching track lyrics.");
        }

        const lyricsFound = body.lyrics;
        console.debug(`Lyrics found: ${lyricsFound.lyrics_body}`);
        return lyricsFound;
      })
      .catch((error) => {
        console.log("something went bad.", error);
      });
  },
};

module.exports = musixMatchClient;

// musixMatchClient.searchArtistByName("Green Day");
// musixMatchClient.searchTrack("Basket case", 290);
musixMatchClient.getTrackLyrics(84590104);