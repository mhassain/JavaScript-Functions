/*======4 Uses of array method =======*/

//01.Calling a Function on Each Item in an Array
const sweetArray = [2, 3, 4, 5, 35];

const sweeterArray = sweetArray.map(sweetItem => {
  return sweetItem * 2;
});

console.log(sweeterArray);

// OR
const makeSweeter = sweetItem => sweetItem * 3;

const newSweetArray = [3, 5, 7, 9, 15];

const newSweeterArray = newSweetArray.map(makeSweeter);

console.log(newSweeterArray);

//02.Converting a String to an Array
const name = "habijabi";

const map = Array.prototype.map;

const newName = map.call(name, eachLetter => {
  return `${eachLetter}`;
});

console.log(newName);

//03.Rendering Lists in JavaScript Libraries
/*

const names = ["john", "sean", "mike", "jean", "chris"];

const NamesList = () => (
  <div>
    <ul>
      {names.map(name => (
        <li key={name}> {name} </li>
      ))}
    </ul>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<NamesList />, rootElement);
*/

//04.Reformatting Array Objects
const myUsers = [
  { name: "chuloo", likes: "grilled chicken" },
  { name: "chris", likes: "cold beer" },
  { name: "sam", likes: "fish biscuits" }
];
//console.log(myUsers[1].name);
//console.log(myUsers[1]["name"]);

const usersByFood = myUsers.map(item => {
  const container = {};

  container[item.name] = item.likes;
  // let aVariable = "age";
  // container[aVariable] = item.name.length * 10;
  container.age = item.name.length * 10;

  return container;
});

console.log(usersByFood);
