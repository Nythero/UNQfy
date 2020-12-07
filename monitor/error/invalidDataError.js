const { BadRequest } = require("./errors");

class InvalidDataError extends BadRequest {
  constructor(fields){
    super('Los campos '+ fields.toString() + " son invalidos");
    this.name = "InvalidDataError";
  }
}

module.exports = InvalidDataError;
