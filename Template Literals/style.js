/*=======Template Literals======*/

// String Concatenation//

var person = {
  fname: "Alfred",
  lname: "Nobel"
};

console.log(
  `The name of the founder of nobel prize is ${person.fname} ${person.lname} `
);

// Line Breaks //

console.log(`Dear Mom, 
  Hope you are well.
    Love, your son
`);

// Tagged Templates //

let name = "Mahade";
let age = 30;

myIntro`My name is ${name}, and I am ${age} years old `;

function myIntro(intro, nameArg, ageArg) {
  console.log(intro[0] + nameArg + intro[1] + ageArg + intro[2]);
}
