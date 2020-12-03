var winston  = require('winston');
var {Loggly} = require('winston-loggly-bulk');
winston.add(new Loggly({
    token: "TOKEN",
    subdomain: "SUBDOMAIN",
    tags: ["Winston-NodeJS"],
    json: true
}));

const winstonLog = (dataLog) => {
  winston.log(dataLog.level, dataLog.message);
};

module.exports = winstonLog;
