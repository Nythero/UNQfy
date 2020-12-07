const axios = require("axios").default;
const axiosInstance = axios.create({
  baseURL: "http://localhost:6000/api/",
});

class NewsletterClient {
  constructor() {
    if (NewsletterClient.instance) {
      return NewsletterClient.instance;
    }
    NewsletterClient.instance = this;
    return this;
  }

  notify(bodyData) {
    axiosInstance.post("notify", {
      artistId: bodyData.artistId,
      subject: bodyData.subject,
      message: bodyData.message,
    });
  }

  deleteSubscriptions(artistId) {
    axiosInstance.delete("subscriptions", { artistId: artistId });
  }
}

module.exports = NewsletterClient;
