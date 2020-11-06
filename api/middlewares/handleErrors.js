const { GeneralError } = require("../utils/errors");

const handleErrors = (err, req, res, next) => {  
  if (err instanceof GeneralError) {
    const errCode = err.getCode();
    return res.status(errCode).json({
      status: errCode,
      errorCode: nameToErrorCode(err)
    });
  }

  return res.status(500).json({
    status: 500,
    errorCode: "INTERNAL_SERVER_ERROR",
    errorCode: err.message
  });
};

const nameToErrorCode = (err) => {
  if (err.name.includes("NameTaken")){
    return "RESOURCE_ALREADY_EXISTS";
  }
  else if(err.name.includes("Invalid")){
    return "BAD_REQUEST";
  }
  else if(err.name.includes("Nonexistent")){
    return (err.operation.includes(err.resource))?"RESOURCE_NOT_FOUND":"RELATED_RESOURCE_NOT_FOUND";
  }
};

module.exports = handleErrors;
