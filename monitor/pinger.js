const axios = require('axios');

const pinger = {
  ping : function (url){
    const axiosInstance = axios.create({ baseURL: url });
    return axiosInstance.get("/");
  }
};

module.exports = pinger;
