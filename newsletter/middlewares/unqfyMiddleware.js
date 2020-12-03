const UnqfyClient = require("../clients/unqfyClient");

const unqfyClient = (req, res, next) => {
  req.body.unqfyClient = new UnqfyClient();
  next();
};

module.exports = unqfyClient;
