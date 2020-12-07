const NewsletterHelper = require("../utils/newsletterHelper");

const newsletterHelper = (req, res, next) => {
  req.body.newsletterHelper = new NewsletterHelper();
  next();
};

module.exports = newsletterHelper;
