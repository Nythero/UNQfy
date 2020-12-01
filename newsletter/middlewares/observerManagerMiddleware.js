const ObserverManager = require("../observerManager");

const observerManager = (req, res, next) => {
  req.body.observerManager = new ObserverManager();
  next();
};

module.exports = observerManager;
