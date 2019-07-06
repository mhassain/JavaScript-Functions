// How to create Objects in JS
var x = new Object();
var y = {};

console.log(x);
console.log(y);

var Car = {
  brand: "Toyota",
  model: "m-19",
  doors: 4,
  hasFastSpeed: true,
  howManyDoors: function() {
    return this.doors;
  }
};

Car.price = "120000$";
console.log(Car.price);

console.log(Car.brand);
console.log(Car.howManyDoors());

delete Car.model;
console.log(Car.model);

var Vcar = function() {
  (this.brand = "Toyota"),
    (this.model = "m-19"),
    (this.doors = 4),
    (this.hasFastSpeed = true),
    (this.howManyDoors = function() {
      return this.doors;
    });
};

console.log(Vcar.brand);
var Ncar = new Vcar();
console.log(Ncar.brand);

console.dir(Vcar);
console.dir(Ncar);
