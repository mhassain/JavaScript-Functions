// How to create an Object?
var x = new Object();

var y = {};

var z = {
	fname: "mahade",
	lname: "hasan"
}

console.log(x);
console.log(y);
console.log(z);

// How to Add / Remove Properties and Method from Object?

var Car = {
	brand: "toyota",
	model: "m-19",
	door: 4,
	hasFastSpeed: true,
	howManyDoors: function(){
		return this.door;
	}
}

Car.price = '120000$'

console.log(Car.brand);
console.log(Car.hasFastSpeed);
console.log(Car.howManyDoors());

console.log(Car);
delete(Car.model);
console.log(Car);

// How to add Private variables and Private Method?
var Vehicle = function(){
	this.brand = "toyota";
	this.model = "m-19";
	this.door = 4;
	this.hasFastSpeed = true;
}

console.log(Vehicle.brand);

var Gari = new Vehicle();

console.log(Gari.brand);

Vehicle.model = "M-20";
console.log(Vehicle.model);
console.log(Gari.model);

console.log(Gari instanceof Vehicle);
console.log(Gari.constructor);

// How to create closures

var Pizza = function(){
	var crust = "thin";
	var toppings = 3;

	var getToppings = function(){
		return toppings;
	}

	var tmp = {};
	tmp.getToppings = getToppings;

	return tmp;
}

var pizzaA = new Pizza();

console.log(pizzaA.getToppings());