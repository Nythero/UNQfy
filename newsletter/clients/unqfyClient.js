const UNQFY_API_HOST = process.env.UNQFY_API_HOST;
const axios = require("axios").default;
const axiosInstance = axios.create({
  baseURL: UNQFY_API_HOST,
});

class UnqfyClient {
  constructor() {
    if (UnqfyClient.instance) {
      return UnqfyClient.instance;
    }
    UnqfyClient.instance = this;
    return this;
  }

  existsArtist(artistId) {
    return axiosInstance
      .get(`/api/artists/${artistId}`)
      .then((res) => { 
        console.log(res);
        res.status === 200 && res.data.id === artistId;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}

module.exports = UnqfyClient;
