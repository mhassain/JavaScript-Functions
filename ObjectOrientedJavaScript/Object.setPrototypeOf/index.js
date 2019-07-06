// Object.setPrototypeOf

console.dir(Object);

/*syntex: Object.setPrototypeOf(targetObj, SourceObj)*/

let toyota = {
  drive() {
    return "Driving toyota";
  }
};

let camry = {
  wifi() {
    return "Using Wifi";
  }
};

console.dir(camry);

Object.setPrototypeOf(camry, toyota); // passing reference

console.dir(camry.drive());
console.dir(camry.wifi());
