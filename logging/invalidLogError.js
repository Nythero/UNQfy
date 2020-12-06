const { BadRequest } = require("../api/utils/errors");

class InvalidLogError extends BadRequest{
  constructor(){
    super("No se pudo crear el log es invalido");
    this.name = "InvalidLogError";
  }
}

module.exports = InvalidLogError;
