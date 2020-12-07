const NewsletterClient = require("../clients/newsletterClient");

class NewsletterHelper {
  constructor() {
    if (NewsletterHelper.instance) {
      return NewsletterHelper.instance;
    }
    this.newsletterClient = new NewsletterClient();
    NewsletterHelper.instance = this;
    return this;
  }

  notify(unqfy, artistId, album) {
      const artistName = unqfy.getArtistById(artistId).name;
      const subject = `Nuevo album para el artista ${artistName}`;
      const message = `Se ha agregado el album ${album.name} al artista ${artistName}`;
      const bodyData = { artistId: artistId, subject: subject, message: message };
      this.newsletterClient.notify(bodyData);
  }

  deleteSubscriptions(artistId) {
    this.newsletterClient.deleteSubscriptions(artistId);
  }
}

module.exports = NewsletterHelper;
