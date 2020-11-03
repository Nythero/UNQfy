const { GeneralError } = require("../utils/errors");

const handleErrors = (err, req, res, next) => {  
  if (err instanceof GeneralError) {
    const errCode = err.getCode();
    return res.status(errCode).json({
      status: errCode,
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 500,
    message: err.message,
  });
};

module.exports = handleErrors;
