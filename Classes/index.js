/*========= Classes =========== */
/* Classes are nothing but blue print to create object. */
// prototype based class
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  console.log(this.name);
};

let user = new User("Jhon");
user.sayHi();
console.log(user); //Jhon

// constructor based class
class User1 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}
let newuser = new User1("Vohn");
newuser.sayHi();

/*Note: The class User {...} here actually does two things: 
01. Declares a variable User that references the function named "constructor".
02. Puts methods listed in the definition into User.prototype.
*/

// Proofing //
class newUser {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// proof: User is the 'constructor' function
console.log(newUser === newUser.prototype.constructor);

// proof: there are two methods in its 'prototype' //
console.log(Object.getOwnPropertyNames(newUser.prototype));

/*============ Classes FCC =============*/
// Basic Example //
class Rectangle {
  // Setup Object
  constructor(_width, _height, _color) {
    console.log("The Rectangle is being created");

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    console.log(
      `I am a rectangle of ${this.width} x ${this.height} and I am red`
    );
  }
}

const myRectangle1 = new Rectangle(5, 3, "blue");
const myRectangle2 = new Rectangle(10, 5, "red");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

myRectangle2.printDescription();

// Classes: Getters & Setters //
class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestsForArea = 0;
  }

  get area() {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

let square1 = new Square(8);
let square2 = new Square(8);
square1.area = 16;
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.numOfRequestsForArea);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 6));

/*======Classes: Inheritance / SubClasses ======= */
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old `);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);

    //custom
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

const programmers = [
  new Programmer("Don", 45, 12),
  new Programmer("Chamca", 30, 5)
];

function developSoftware(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}

let person1 = new Person("Jeff", 35);
let programmer1 = new Programmer("Smith", 55, 15);

console.log(person1);
console.log(programmer1);

programmer1.code();
person1.describe();
programmer1.describe();

/*========= Classes: Polymorphism========= */

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} generating Animal Sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log(`${this.name} generating Roof! Roof!`);
  }
}

const a1 = new Animal("Don");
const a2 = new Dog("Jeff");

a1.makeSound(); // Generic Animal Sound
a2.makeSound(); // Roof! Roof!

/*========= Classes: HTML list building========= */
class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }

  // Makes an <li></li> element
  static createListItem(text) {
    const li = document.createElement("li");

    li.textContent = text;

    return li;
  }

  update() {
    // Remove all <li> element
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    // Fill <ul></ul> tag with <li>
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }

  remove(index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

// Static Method in Classes //
class Car {
  constructor(color, price) {
    Object.assign(this, { color, price });
  }
  static comparePrise(car1, car2) {
    return Math.abs(car1.price - car2.price);
  }
  getColor() {
    return this.color;
  }
}
/* Static method doesn't use 'this' inside it */
/* Static method directly call the class */

const redCar = new Car("red", 2000);
const blueCar = new Car("blue", 1500);
//console.dir(Car.getColor)
console.log(redCar.getColor()); //red
console.log(Car.comparePrise(redCar, blueCar)); //500

// Static method inside a sub-class //
// base class
class bigCar {
  constructor(price) {
    this.price = price;
  }
  static sellCar(myCar) {
    return `selling for ${myCar.price}`;
  }
}

// sub class
class Toyota extends bigCar {
  constructor(price) {
    super(price);
  }
  static newCar(oldCar) {
    return `Toyota ${super.sellCar(oldCar)}`;
  }
}

const bikroy = new Toyota(3000);
//console.log(mitsubishi.newcar)
console.log(Toyota.newCar(bikroy));
