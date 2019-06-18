// Promise to clean the room //
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  let isClean = true;
  //isClean = false;

  if (isClean) {
    resolve("Clean");
  } else {
    reject("Not Clean");
  }
});

promiseToCleanTheRoom
  .then(function(fromResolve) {
    console.log("This room is " + fromResolve);
  })
  .catch(function(fromReject) {
    console.log("This room is " + fromReject);
  });

// Clean the room - Remove the Garbage - Get IceCream //

let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("Cleaned the room");
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " Garbage Removed");
  });
};

let getIceCream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " Won Ice-Cream");
  });
};

cleanRoom()
  .then(function(result) {
    return removeGarbage(result);
  })
  .then(function(result) {
    return getIceCream(result);
  })
  .then(function(result) {
    console.log(result);
  });

// Parallel Promise //
// Promise.all([cleanRoom(), removeGarbage(), getIceCream()]).then(function() {
//   console.log("all finished");
// });

// First Promise Finished //
// Promise.race([cleanRoom(), removeGarbage(), getIceCream()]).then(function() {
//   console.log("One of them is finished");
// });
