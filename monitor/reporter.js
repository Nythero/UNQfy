const axios = require('axios');

const reporter = {
  report : function (message) {
    /*
    const axiosInstance = axios.create({ baseURL: "https://discord.com/api"});
    const endpoint = "/webhooks/783469014843916318/3M3qn2xCtHp0t-yL1NO2umdQ0WJPmo5tgDoQIOLMmbjTjna4YkVsCXL2RN_CQxTKr3s6";
    axiosInstance.post(endpoint, { content: message }); 
    */
    console.log(message);
  }
};

module.exports = reporter;
