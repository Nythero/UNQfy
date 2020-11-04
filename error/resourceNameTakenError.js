const { Conflict } = require("../api/utils/errors");

class ResourceNameTakenError extends Conflict {
  constructor(resource, value, operation){
    super(`No se pudo completar la accion ${operation}, el ${resource} ${value} ya existe`);
    this.name = "ResourceNameTakenError";
  }
}

module.exports = ResourceNameTakenError;
