// Object.assign //

/*syntex: Object.assign(targetObj, SourceObj)*/

let toyota = {
  drive() {
    return "Driving toyota";
  },
  break() {
    return "Breaking toyota";
  }
};

let camry = {
  wifi() {
    return "Using Wifi";
  }
};

Object.assign(camry, toyota); // copying the method

console.dir(camry);
console.dir(camry.drive());

// console.dir(camry.drive());
// console.dir(camry.wifi());
