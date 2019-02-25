/*=======Filter()===========*/

// Example: 1 - filtering even numbers from array element//

const num = [1, 2, 3, 4, 5];

const evens = num.filter(function(item) {
  return item % 2 === 0;
});

console.log(evens);

// Example: 2 - remove duplicate elements from an array. //

const names = ["John", "Paul", "George", "Ringo", "John"];

var uniqueArray = names.filter(function(item, index, array) {
  return names.indexOf(item) === index;
});

console.log(uniqueArray);

// Example: 3 - filtering numbers which are greater than 0 //

const numbers = [0, 1, -1, 2, -2, 3, -3, 4, -4];

const filtered = numbers.filter(n => n > 0);

console.log(filtered);
