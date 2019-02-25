/*=====Map() vs Reduce() vs Filter()=====*/

//=======Map()========//

/* Use it when: You want to translate/map all elements in an array to another set of values.*/

// Example: convert Fahrenheit temps to Celsius. //
var fahrenheit = [10, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(data) {
  return Math.round(((data - 32) * 5) / 9);
});

console.log(celcius);

//======Reduce()======//

/* Use it when: You want to find a cumulative or concatenated value based on elements across the array. */

// Example: Sum up orbital rocket launches in 2014. //

var rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe(ESA)", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 }
];

var sum = rockets.reduce(function(preVal, data) {
  return preVal + data.launches;
}, 0);

console.log(sum);

//=======filter()========//

/* Use it when: You want to remove unwanted elements based on a condition.
 */

// Example: remove duplicate elements from an array. //

const names = ["John", "Paul", "George", "Ringo", "John"];

//let unique = [...new Set(names)];

var uniqueArray = names.filter(function(item, index, array) {
  return names.indexOf(item) === index;
});
console.log(uniqueArray);
