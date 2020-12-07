const fs = require('fs');
const util = require('util');
const PATH = "./logs.txt";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const logglyLog = require('./logglyClient');

const InvalidLogError = require('./error/invalidLogError');

const logManager = {
  log : function (logData) {
    this._verifyLog(logData);
    logglyLog(logData);
    readFile(PATH)
      .catch(err => {
        if (err.code == "ENOENT") {
          return "";
        }
	else {
          console.log(err.message);
	}
      })
      .then(file => {
	const logMessage = new Date() + " - " + logData.level + " - " + logData.message + "\n";
        const newFile = file + logMessage;
	writeFile(PATH, newFile);
      })
      .catch(err => console.log(err.message));
  },
  _verifyLog : function (logData) {
    const properties = ["level", "message"];
    if (!properties.every(property => logData.hasOwnProperty(property))){
      throw new InvalidLogError();
    }
  }
};

module.exports = logManager;
