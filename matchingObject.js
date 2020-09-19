class MatchingObject {
  addIfMatch(list, field, value){
    if(this.doMatch(field, value)){
      list.push(this);
    }
  }
  doMatch(field, value){
    return this[field].includes(value);
  }
}

module.exports = MatchingObject;
