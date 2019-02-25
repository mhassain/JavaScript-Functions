/*========Reduce()==========*/

// Example: 1 - sum numbers in array element //

const num = [1, 2, 3, 4, 5];

const sum1 = num.reduce(function(result, item) {
  return result + item;
}, 0);

console.log(sum1);

// Example: 2 - Sum up orbital rocket launches in 2014. //

var rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe(ESA)", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 }
];

var sum2 = rockets.reduce(function(preVal, data) {
  return preVal + data.launches;
}, 0);

console.log(sum2);

// Example: 3 - sum positive numbers //

const numbers = [1, -1, 2, 3];
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

const sum3 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum3);
