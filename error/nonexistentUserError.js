class NonexistentUserError extends Error{
    constructor(username){
      super(`No se pudo completar la accion, el usuario con username ${username} no existe`);
      this.name = 'NonexistentUserError';
    }
  }
  
  module.exports = NonexistentUserError;
  