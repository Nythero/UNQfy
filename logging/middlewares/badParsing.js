const badParsingError = (err,req, res, next) => {
  if(err.type == 'entity.parse.failed'){
    res.status(400).send({status:400, errorCode:"BAD_REQUEST"})
  }
  else{
    next(err);
  }
};

module.exports = badParsingError;
