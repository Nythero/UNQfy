class NonexistentCommandError extends Error{
  constructor(command){
    super(`El comando ${command} no existe.`);
    this.name = "NonexistenCommandError";
  }
}

module.exports = NonexistentCommandError;
