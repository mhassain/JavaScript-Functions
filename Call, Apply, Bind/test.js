//======= Call, Apply, Bind Method ======//
var obj = { num: 2 };
var obj2 = { num: 5 };

var addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

//=========== Call ===========//
console.log(addToThis.call(obj, 1, 3, 4));

var arr = [1, 2, 3];

//=========== Apply ===========//
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));

//=========== Bind ===========//
var bound = addToThis.bind(obj);
//console.log(bound);
console.log(bound(3, 5, 7));

console.log("-----------------");

// Borrow prototype functions from Object to Array //

let argsToArray = function() {
  console.log([].slice.call(arguments));
};

argsToArray(1, 2, 3);

// Calling base constructor from sub-constructor//

// Base-Constructor
let mammal = function(legs) {
  this.legs = legs;
};

// Sub-constructor
let cat = function(legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);

console.log(lion);

// Apply function to search minumum from an array//
let numArray = [1, 2, 3];
//console.log(Math.min(1,2,3));
console.log(Math.min.apply(null, numArray));

// Bind function with object //
let button = function(content) {
  this.content = content;
};

/// function
button.prototype.click = function() {
  console.log(`${this.content} clicked`);
};

/// object
let newButton = new button("I am");

let boundButton = newButton.click.bind(newButton);

boundButton();

console.log("........................");

// =========== Call Method ============= //
// Example-01:
var obj = { name: "Mahade" };

var greeting = function(a, b, c) {
  return `welcome ${this.name} to ${a}, ${b} in ${c}`;
};

console.log(greeting.call(obj, "Savar", "Dhaka", "Bangladesh"));

// Example-02:

// construtor function
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Pizza(name, price) {
  Product.call(this, name, price);
  this.category = "pizza";
}
function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

var pizza = new Pizza("margherita", 50);
var toy = new Toy("robot", 40);

console.log(pizza);
console.log(toy);

// ============ Apply Method ============ //
// Example-01:
var obj = { name: "Mahade" };

var greeting = function(a, b, c) {
  return `welcome ${this.name} to ${a}, ${b} in ${c}`;
};

var args = ["Savar", "Dhaka", "Bangladesh"];

console.log(greeting.apply(obj, args));

// Example-02:
var array = ["a", "b", "c"];
var elements = [1, 2, 3];

array.push.apply(array, elements);

console.log(array);

// Example-03:
var numbers = [53, 65, 25, 37, 78];
console.log(Math.max.apply(null, numbers));

// ============= Bind Method ============ //

// Example-01:
var obj = { name: "Mahade" };

var greeting = function(a, b, c) {
  return `welcome ${this.name} to ${a}, ${b} in ${c}`;
};

var bound = greeting.bind(obj);

console.log(bound("Savar", "Dhaka", "Bangladesh"));

// Example-02:
var x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX()); // 9

var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
