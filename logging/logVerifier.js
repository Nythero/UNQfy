const logVerify = (req, res, next) {
  const body => req.body;
  const properties = ["level", "message"];
  if (properties.all(property => body.hasOwnProperty(property))){
    next();
  }
  else {
    next(new Error
  }
};

module.exports = logVerify;
