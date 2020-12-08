const NEWSLETTER_API_HOST = process.env.NEWSLETTER_API_HOST;
// const NEWSLETTER_API_HOST = "http://localhost:6000";
const axios = require("axios").default;
const axiosInstance = axios.create({
  baseURL: NEWSLETTER_API_HOST,
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
    axiosInstance.post("/api/notify", {
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
