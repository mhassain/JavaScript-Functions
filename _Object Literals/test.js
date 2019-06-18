//==== Clousers =====//
let obj = function() {
  let i = 0;

  return {
    setI(k) {
      i = k;
    },
    getI() {
      return i;
    }
  };
};

let x = obj();

x.setI(2);

console.log(x.getI());
console.log("-------------------");

var outer = 3;

var addTo = function() {
  var inner = 2;
  return outer + inner;
};

console.log(addTo());
console.dir(addTo);

outer = 4;

console.log(addTo());
console.dir(addTo);

// Closures are nothing but FUNCTIONS WITH PRESERVED DATA //
