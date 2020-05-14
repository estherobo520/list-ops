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
    const list = new List()
    for (let i = 0; i < bigList.values.length; i++)
    {
      list.values=[...list.values,...bigList.values[i].values]
    }
    this.values = [...this.values + list.values];
    return this;
  }

  filter(callback) {
    const array = new List();
    for (let a in this.value){
      if(callback(this.values[a]))
      {
        array.values.push(this.values[a]);
      }
    }
    return array;
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
