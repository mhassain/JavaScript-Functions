/* Syntex: 
Object.crate(prototypeObject, propertyObject) */

// Every constructor has a property call Prototype which holds bunch of methods//

const myObject = Object.create(Object.prototype);

const myLiteral = {};
const noProto = Object.create(null);

console.dir(myObject);
console.dir(myLiteral);
console.dir(noProto);

const Car = function(color) {
  this.color = color;
};

const car1 = new Car("red");
const car2 = Object.create(Car.prototype);

console.log(car1);
console.log(car2);

/* The main objective of Object.create method is to extend constructors */
Car.prototype = {
  getColor() {
    return this.color;
  }
};

const ToyCar = function() {};
ToyCar.prototype = Object.create(Car.prototype);

const logoCar = new ToyCar();

console.log(logoCar);

console.log(logoCar instanceof ToyCar);
console.log(logoCar instanceof Car);
console.log(logoCar instanceof Object);
