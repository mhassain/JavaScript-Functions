// Regular Function //
let add = function(n1, n2) {
  return n1 + n2;
};

let sum = add(1, 2);
console.log(sum);

// Constructor Function //
let Car = function(color) {
  this.color = color;
};
// Note:-- all properties are public properties-- //
let redCar = new Car("red");
console.log(redCar);

// Private Proterties in a Constructor //
let Vcar = function(rong) {
  this.setColor = function() {
    rong;
  };

  this.getColor = function() {
    return rong;
  };
};

let blueCar = new Vcar("blue");

console.log(blueCar.getColor());

// Extending Function Constructors //
// Base consturctor
let Mammal = function(legs) {
  this.legs = legs;
};

Mammal.prototype = {
  walk() {
    return "walking";
  },
  sleep() {
    return "sleeping";
  }
};
//console.dir(Mammal.prototype);

// Sub constructor
let Bat = function(legs, isVegetarian) {
  Mammal.call(this, legs);
  this.isVegetarian = isVegetarian;
};

Bat.prototype = Object.create(Mammal.prototype);
Bat.prototype.constructor = Bat;

Bat.prototype.fly = function() {
  return "flying";
};

console.dir(Bat);

// Creating an Object from Bat constructor
let fruitBat = new Bat(4, true);

console.dir(fruitBat.sleep());
console.dir(fruitBat.fly());

console.dir(fruitBat);
