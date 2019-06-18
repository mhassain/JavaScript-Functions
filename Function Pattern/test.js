// Factory Function Pattern //
var peopleFactory = function(name, age, state) {
  var temp = {};
  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.thePerson = function() {
    console.log(this.name + ", " + this.age + ", " + this.state);
  };

  return temp;
};

var person1 = peopleFactory("John", 23, "CA");
var person2 = peopleFactory("Nik", 27, "SC");

person1.thePerson();
person2.thePerson();

// Constructor Function Pattern //

var peopleConstructor = function(name, age, state) {
  this.age = age;
  this.name = name;
  this.state = state;

  this.thePerson = function() {
    console.log(this.name + ", " + this.age + ", " + this.state);
  };
};

var person1 = new peopleFactory("Kuddus", 80, "UA");
var person2 = new peopleFactory("Tormuz", 84, "KK");

person1.thePerson();
person2.thePerson();

// Prototype Function Pattern //
var peopleProto = function(name, age, city) {
  this.age = age;
  this.name = name;
  this.city = city;

  peopleProto.prototype.printPerson = function() {
    console.log(this.name + ", " + this.age + ", " + this.city);
  };
};

// peopleProto.prototype.age = 0;
// peopleProto.prototype.name = "no name";
// peopleProto.prototype.city = "no city";

var person1 = new peopleProto("kamal", 22, "NY");
person1.printPerson();
//console.log("age" in person1);
//console.log(person1.hasOwnProperty("name"));
