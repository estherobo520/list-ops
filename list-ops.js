//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.values = list ? list : [];
  }

  append(appendList) {
    this.values = [...this.values, ...appendList.values]
    return this;
  }

  concat(bigList) {
    this.values = [...this.values + bigList.values];
    return this;
  }

  filter(callback) {
    let array = [];
    for (let a in this.value){
      if(callback(a))
      {
        array.push(a);
      }
    }
  }

  map() {
    throw new Error("Remove this statement and implement this function");
  }

  length() {
    throw new Error("Remove this statement and implement this function");
  }

  foldl() {
    throw new Error("Remove this statement and implement this function");
  }

  foldr() {
    throw new Error("Remove this statement and implement this function");
  }

  reverse() {
    throw new Error("Remove this statement and implement this function");
  }
}
