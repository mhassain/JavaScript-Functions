/*===========CallBack function=========*/
let add = function(a, b) {
  return a + b;
};

let multiply = function(a, b) {
  return a * b;
};

let calc = function(num1, num2, callback) {
  return callback(num1, num2);
};

console.log(calc(2, 3, add));
//===========================

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

function greeting(name) {
  alert("Hello " + name);
}

processUserInput(greeting);

//=============================
function sayHi(name, callback) {
  console.log(`Hi! ${name}`);
  callback(name);
}

function sayBye(name) {
  console.log(`Bye! ${name}`);
}

sayHi("Mahade", sayBye);

//=============================
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function finishHomework() {
  alert("Finished my homework");
}
doHomework("math", finishHomework);
