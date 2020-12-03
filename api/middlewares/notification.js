const axios = require('axios');
const axiosInstance = axios.create({baseURL: "http://localhost:4000" });

const loggingEndpoint = "/api/notify";

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
