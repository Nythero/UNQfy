var winston  = require('winston');
var {Loggly} = require('winston-loggly-bulk');
winston.add(new Loggly({
    token: "14090a65-a520-4eff-8f42-599b06565428",
    subdomain: "SUBDOMAIN",
    tags: ["Winston-NodeJS"],
    json: true
}));

const winstonLog = (dataLog) => {
  winston.log(dataLog.level, dataLog.message);
};

module.exports = winstonLog;
