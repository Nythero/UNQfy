const commandSelectorArtist = require('./commandSelectorArtist');
const commandSelectorAlbum = require('./commandSelectorAlbum');
const commandSelectorTrack = require('./commandSelectorTrack');
const commandSelectorDefault = require('./commandSelectorDefault');

//Errores
const NonexistentCommandError = require('../error/nonexistentCommandError');

/*Para agregar un comando de unqfy: Se necesita agregarlo en el commandSelector correspondiente
 * al tipo de objeto con el cual trabaja*/
const commandSelector = {
  _commandSelectors : [commandSelectorArtist,
	               commandSelectorAlbum,
	               commandSelectorTrack,
                       commandSelectorDefault],
  select(command){
    const selector = this._commandSelectors.find(cs => cs.hasOwnProperty(command));
    return selector[command];
  },
  validarCommand(command){
    if(!this._commandSelectors.some(cs => cs.hasOwnProperty(command))){
      throw new NonexistentCommandError(command);
    }
  }
}

module.exports = commandSelector;
