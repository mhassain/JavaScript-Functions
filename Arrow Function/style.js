/*=========Arrow functions(FCC)=========*/

// Syntex - with 2 parameters
(para1, para2) => {
  statements;
};
(para1, para2) => expression;
(para1, para2) => {
  return expression;
};

// Syntex - with 1 parameters
singleParam => {
  statements;
};
singleParam => {
  statements;
};

// Syntex - with No parameters
() => {
  statements;
};
() => expression;
() => {
  return expression;
};

// Normal function
var multiply = function(x, y) {
  return x * y;
};
//==> Arrow Function
var multiply = (x, y) => {
  return x * y;
};
// or
var multiply = (x, y) => x * y;

//========== Example-1 ============== //

var materials = ["Hydrogen", "Helium", "Lethium", "Beryllium"];
// Normal function
var materialsLength1 = materials.map(function(material) {
  return material.length;
});
console.log(materialsLength1);
//==> Arrow function
var materialsLength2 = materials.map(material => {
  return material.length;
});

var materialsLength3 = materials.map(material => material.length);

console.log(materialsLength3);

//===========Arrow Function(WES BOS)=========//
const names = ["wes", "kait", "lux"];

// normal function
const fullNames = names.map(function(name) {
  return `${name} bos `;
});
console.log(fullNames);

const names2 = ["wes", "kait", "lux"];

// ==>arrow function Example-2================//
const fullNames2 = names2.map(name => {
  return `${name} box`;
});
console.log(fullNames2);

const names3 = ["wes", "kait", "lux"];

// without parenthesis
const fullNames3 = names3.map(name => {
  return `${name} sox`;
});
console.log(fullNames3);

const names4 = ["wes", "kait", "lux"];

// without return keyword
const fullNames4 = names4.map(name => `${name} fox`);
console.log(fullNames4);

const names5 = ["wes", "kait", "lux"];

// without arguments
const fullnames5 = names5.map(() => `cool bos `);
console.log(fullnames5);

/* arrow function are always annonyms function*/

const sayMyName = name => {
  console.log(`Hello ${name}! `);
};
sayMyName("Mahade");
