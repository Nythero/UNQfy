const axios = require("axios").default;
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
});

class UnqfyClient {
  constructor() {
    if (!UnqfyClient.instance) {
      return UnqfyClient.instance;
    }
    UnqfyClient.instance = this;
    return this;
  }

  existsArtist(artistId) {
    return axiosInstance
      .get(`artists/${artistId}`)
      .then((res) => res.status === 200 && res.data.id === artistId)
      .catch(() => false);
  }
}

module.exports = UnqfyClient;
