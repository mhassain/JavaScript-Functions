/*========== Destructuring =========== */

/*Destructuring simply implies breaking down a complex structure into simpler parts.*/

// 01. Object Destructuring
const student = {
  firstName: "Mahade",
  lastName: "Hasan",
  subject: "JavaScript"
};

const { firstName, lastName, subject } = student;

console.log(firstName, lastName, subject);

// Default Values
const person = {
  name: "Mahade",
  country: "Bangladesh"
};

const { name, country, age = 30 } = person;

console.log(`I am ${name} from ${country} and I am ${age} year old. `);

// Using Different Variable Names
const newPerson = {
  fullName: "Mahade",
  country: "Bangladesh"
};

const { fullName: myname, country: place, age: years = 30 } = newPerson;

console.log(`My name is ${myname} from ${place} and I am ${years} year old. `);

// Nested Object Destructuring
const aStudent = {
  studentName: "Abdul Kuddus",
  age: 22,
  scores: {
    maths: 74,
    english: 63
  }
};

const {
  studentName: stname,
  scores: { maths: math, english: eng, science = 50 }
} = aStudent;

console.log(
  `${stname} scored ${math} in Maths, ${eng} in English and ${science} in science in his final exam. `
);

// 02. Array Destructuring
const rgb = [255, 200, 0];

const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue} `);

// Default Values
const rgba = [200];

const [x, y = 244, z = 225, a = 50] = rgba;

console.log(`r: ${x}, g: ${y}, b: ${z}, a: ${a}`);

// Skipping Items
const abc = [200, 233, 100];

const [, , c] = abc;

console.log(c);

// Swapping Variables
let width = 300;
let height = 400;

const landscape = true;

console.log(`${width} x ${height}`);

if (landscape) {
  [width, height] = [height, width];

  console.log(`${width} x ${height}`);
}

// Nested Array Destructuring
const numbers = [8, [1, 2, 3], 10, 12];

const [n, [d, e, f]] = numbers;

console.log(n, d, e, f);

// Rest Items
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

const [, orange, yellow, ...others] = rainbow;

console.log(others);

// Cloning Arrays
const planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

const planetsClone = planets;

planetsClone.splice(3);

console.log(planets);
console.log(planetsClone);

// 03. Mixed Destructuring
const aboutMe = {
  myName: "Mahade Hasan",
  myAge: 30,
  myLocation: {
    country: "Bangaldesh",
    city: "Dhaka",
    learning: ["JavaScript", "React"]
  }
};

const {
  myName,
  myAge,
  myLocation: {
    city,
    learning: [js, re]
  }
} = aboutMe;

console.log(
  `My name is ${myName}, I am ${myAge} years old. I live in ${city}. I am learning ${js} and ${re}.`
);
// 04. Destructured Function Parameters

const player = {
  playerName: "Sabbir",
  totalMatch: 3,
  runs: {
    firstMatch: 0,
    secondMatch: 15,
    thirdMatch: 100
  }
};

function performance({
  playerName: pname,
  totalMatch: matches,
  runs: { firstMatch, secondMatch, thirdMatch }
}) {
  console.log(`Player name is ${pname}`);
  console.log(`He played ${matches} Matches`);
  console.log(`His scored in 1st match ${firstMatch} runs`);
  console.log(`His scored in 2nd match ${secondMatch} runs`);
  console.log(`His scored in 3rd match ${thirdMatch} runs`);
}

performance(player);
