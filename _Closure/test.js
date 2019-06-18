//==== Clousers =====//

// Example: 01
var bahirNum = 3;

var jogKoro = function() {
  var vitorNum = 2;
  return bahirNum + vitorNum;
};

console.log(jogKoro());
console.log("-------------------");

// Example: 02
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

// Example: 03
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
