//====Find() & FindIndex()=====//

// Defination: The find() method returns the value of the first element in an array that pass a test (provided as a function).

// Defination: The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).

// Example: 1 //

let arr = [2, 4, 6, 8, 9, 10, 12];

function isOdd(i) {
  return i % 2 !== 0;
}

let resultOne = arr.find(isOdd);

let resultTwo = arr.findIndex(isOdd);

console.log(resultOne);

console.log(resultTwo);

// Exmaple: 2 //

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

let result1 = ages.find(checkAdult);

let result2 = ages.findIndex(checkAdult);

console.log(result1);

console.log(result2);

// Example: 3 //

let custormers = [
  { name: "Beximco", credit: 100 },
  { name: "Acme", credit: 200 },
  { name: "Square", credit: 300 }
];

console.log(custormers.find(c => c.credit > 100));

console.log(custormers.findIndex(c => c.credit > 100));

// Note: The find() and findIndex() stop searching the array at the first time when the callback function returns true.
