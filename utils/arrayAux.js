const arrayAux = {
  tryAdd(array, element, field){
    for (let i = 0; i < array.length; i++){
      this._evaluateAdd(array, element, field, position);
    }
  }
  _evaluateAdd(array, element, field, position){
    if(element[field] > array[position][field]){
      
    }
  }
}

module.exports = arrayAux;
