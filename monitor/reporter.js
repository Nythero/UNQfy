const axios = require('axios');

const reporter = {
  report : function (message) {
    /*
    const axiosInstance = axios.create({ baseURL: "https://discord.com/api"});
    const endpoint = "Endpoint";
    axiosInstance.post(endpoint, { content: message }); 
    */
    console.log(message);
  }
};

module.exports = reporter;
