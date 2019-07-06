// 1st constructor
const Car = function() {};

Car.prototype = {
  print() {
    return " I Love Toyota";
  }
};
// 2nd constructor
const ToyCar = function() {};

ToyCar.prototype = Object.create(Car.prototype);

//console.log(ToyCar.prototype);

ToyCar.prototype.print = function() {
  return " I Love Audi";
};

// 3nd constructor
const ToyTransformer = function() {};

ToyTransformer.prototype = Object.create(ToyCar.prototype);

ToyTransformer.prototype.print = function() {
  return " This is the Transformer Car";
};

console.dir(Car.prototype);
console.dir(ToyCar.prototype);
console.dir(ToyTransformer.prototype);

const toyota = new Car();
const RoyalCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print());
console.log(RoyalCar.print());
console.log(optimusPrime.print());
