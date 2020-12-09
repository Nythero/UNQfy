const axios = require('axios');

const LOGGING_API_HOST = process.env["LOGGING_API_HOST"];

const loggingEndpoint = "/api/notify";

const axiosInstance = axios.create({baseURL: LOGGING_API_HOST });

const notify = (req, res, next) => {
  if (res.headersSent){
    const message = res.locals.message;
    const log  = { level: "info", message: message };
    axiosInstance.post("/api/notify", log);
    res.end();
  }
  else{ 
    next();
  }
};

module.exports = notify;
