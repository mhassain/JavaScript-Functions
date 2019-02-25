/*========== Spread Operator ==========*/

// 01. Copying an array

let fruits = ["Apple", "Orange", "Banana"];

let newFruitArray = [...fruits];

console.log(newFruitArray);

// 02. Concatenating arrays

let arr1 = ["A", "B", "C"];

let arr2 = ["X", "Y", "Z"];

let result = [...arr1, ...arr2];

console.log(result);

// 03. Spreading elements together with an individual element

let color = ["Red", "Green", "Blue"];

let newColors = ["Yellow", ...color];

console.log(newColors);

// 04. Spreading elements on function calls

let cars = ["Toyota", "BMW", "Mitsubishi"];

let getCars = (f1, f2, f3) => {
  console.log(`Cars: ${f1}, ${f2} and ${f3}`);
};

getCars(...cars);

// 05. Spred syntex for object literals

let obj1 = { id: 101, name: "Jhon Doe" };

let obj2 = { age: 25, country: "USA" };

let employee = { ...obj1, ...obj2 };

console.log(employee);

/*==========Rest Parameters========*/

// Example: 1

function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));

// Example: 2

function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element);
}

var arr = multiply(2, 1, 2, 3);

console.log(arr);
