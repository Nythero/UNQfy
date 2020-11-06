const { NotFound } = require("../api/utils/errors");

class NonexistentResourceError extends NotFound {
  constructor(resource, value, operation){
    super(`No se pudo completar la accion ${operation}, el ${resource} ${value} no existe`);
    this.name = 'NonexistentResource';
    this.operation = operation;
    this.resource  = resource;
  }
}

module.exports = NonexistentResourceError;
