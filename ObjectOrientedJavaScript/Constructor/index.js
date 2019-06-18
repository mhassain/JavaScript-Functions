// Regular Function
let add = function(n1, n2) {
  return n1 + n2;
};

let sum = add(1, 2);
console.log(sum);

// Constructor Function
let Car = function(color) {
  this.color = color;
};
// Note:-- all properties are public properties-- //
let redCar = new Car("red");
console.log(redCar);

// Private Proterties in a Constructor
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
