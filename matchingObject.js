class MatchingObject {
  constructor(field){
    this._elemsIndex = field;
  }
  //Indica si el field del objeto actual contiene el name dado	
  match(field,name){
    try {
      return this[field].includes(name);
    }
    catch (error){
      if  (error instanceof TypeError){
        return false;
      }
      else {
        throw error;
      }
    }
  }
  //Devuelve todos los objetos en [_elemsIndex] que hacen match o tienen un objeto que hace match
  elementsThatMatch(field, name){
    return this[this._elemsIndex].filter(element => element.matchOrElementsMatch(field, name));
  }
  //Indica si hace match o tiene un objeto que hace match
  matchOrElementsMatch(field, name){
    return this.match(field, name) || this.elementsThatMatch(field, name) !== [];
  }

  //Obtiene todos los objetos que hacen match en el field dado contra el name dado
  //Primero agrega el objeto actual si hace match
  //Luego, a los elementos que hacen match o tienen un objeto que hace match en su [_elemsIndex]
  //los recorre para obtener los objetos que hacen match
  matchingElements(field, name){
    let elems = (this.match(field, name)) ? [this] : []; 
    elems = elems.concat(                                
      this.                                              
        elementsThatMatch(field,name).
	flatMap(elem => elem.matchingElements(field, name)));
    return elems;
  }
}

module.exports = MatchingObject;
