// 3 ways to create a object

// 01. Object Literal {} //
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },

  draw: function() {
    console.log("draw1");
  }
};

circle.draw();

// 02. Factory Function - If we return an object as a function//
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw2");
    }
  };
}

const circle2 = createCircle(1);

circle2.draw();

// 03. Constructor Function //
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw3");
  };
}

const another = new Circle(1);
/*Note-1: every 'new' operator create an empty object {} */
/*Note-2: constructor function return automatically */
console.log(another.draw());

/*Note-1: Primitives are copied by their value*/
/*Note-2: Objects are copied be their reference */

// Adding/Removing Properties //
function aCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw4");
  };
}

const newCircle = new aCircle(10);

newCircle.location = { x: 1 };

console.log(newCircle.draw());
console.log(newCircle.radius);
console.log(newCircle.location);

// Create an object in general way
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    console.log(`Hi! I'm ${obj.name}`);
  };
  return obj;
}

var salva = createNewPerson("Salva");

console.log(salva.name);
salva.greeting();

// Create an object in Object-Oriented way
function Person(name) {
  this.name = name;
  this.greeting = function() {
    console.log(`Hi! i'm ${this.name}`);
  };
}

var person1 = new Person("Bob");
var person2 = new Person("Sarah");

console.log(person1.name);
person1.greeting();
console.log(person2.name);
person2.greeting();

// Creating a constructor function
function finalPerson(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    console.log(
      `${this.name.first} ${this.name.last} is ${
        this.age
      } years old. He likes ${this.interests[0]} and ${this.interests[1]}.`
    );
    this.greeting = function() {
      console.log(`Hi! I'm ${this.name.first}.`);
    };
  };
}

// creating an instance of this constructor function
var aPerson = new finalPerson("Uncle", "Bob", 65, "male", [
  "cricket",
  "football"
]);

// now accessing our object
console.log(aPerson.age);
aPerson.interests[1];
aPerson.bio();
