const rp = require("request-promise");

const BASE_URL = "http://api.musixmatch.com/ws/1.1";
const API_KEY = "fa29e650d5f2618d4f314780014d54b0";

class MusixMatchClient {
  getTrackLyrics(trackName) {
    return this._searchTrack(trackName)
      .then((track) => {
        console.log(track.track_id);
        return this._getTrackLyrics(track.track_id);
      })
      .then((lyrics) => { 
        console.log(lyrics);
        return lyrics;
      });
  }
  
  _searchTrack(trackName) {
    const options = {
      uri: BASE_URL + "/track.search",
      qs: {
        apikey: API_KEY,
        q_track: trackName,
      },
      json: true,
    };

    return rp
      .get(options)
      .then((response) => {
        const header = response.message.header;
        const body = response.message.body;
        if (header.status_code !== 200) {
          throw new Error("error while searching a track.");
        }

        const trackFound = body.track_list[0].track;
        return trackFound;
      })
      .catch((error) => {
        console.log("something went bad.", error);
      });
  }

  _getTrackLyrics(musixTrackId) {
    const options = {
      uri: BASE_URL + "/track.lyrics.get",
      qs: {
        apikey: API_KEY,
        track_id: musixTrackId,
      },
      json: true,
    };

    return rp
      .get(options)
      .then((response) => {
        const header = response.message.header;
        const body = response.message.body;
        if (header.status_code !== 200) {
          throw new Error("error while searching track lyrics.");
        }

        const lyricsFound = body.lyrics.lyrics_body;
        return lyricsFound;
      })
      .catch((error) => {
        console.log("something went bad.", error);
      });
  }
}

module.exports = MusixMatchClient;

// const musix = new MusixMatchClient();
// musix
//   .searchTrack("Basket case")
//   .then((track) => musix.getTrackLyrics(track.track_id))
//   .then((lyrics) => console.log(lyrics));
