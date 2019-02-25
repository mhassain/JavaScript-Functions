/*==========Map() vs Foreach()=========*/

//forEach() — executes a provided function once for each array element.

//map() — creates a new array with the results of calling a provided function on every element in the calling array.

let arr = [1, 2, 3, 4, 5];

// using forEach() //

arr.forEach((num, index) => {
  return (arr[index] = num * 2);
});

console.log(arr); // ans: 2,4,6,8,10

// using Map() //

let doubled = arr.map(num => {
  return num * 2;
});

console.log(doubled); // ans: 4,8,12,16,20

/*Note: forEach() affects and changes our original Array, whereas map() returns an entirely new Array — thus leaving the original array unchanged. */
