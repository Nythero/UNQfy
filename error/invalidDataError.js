class InvalidDataError extends Error {
  constructor(fields){
    super('Los campos '+ fields.toString() + " son invalidos");
    this.name = "InvalidDataError";
  }
}

module.exports = InvalidDataError;
