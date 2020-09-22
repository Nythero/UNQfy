class UserNameTakenError extends Error{
    constructor(userName){
      super(`El usuario con nombre ${userName} ya existe. Intente otro nombre.`);
      this.name = "UserNameTakenError";
    }
  }
  
  module.exports = UserNameTakenError;
  