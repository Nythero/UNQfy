let commandSelectorDefault = {
  search(unqfy, args){
    const name = args[0];
    return unqfy.searchByName(name);
  }
}

module.exports = commandSelectorDefault;
