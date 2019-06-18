// Promise //
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const myWifeBringingTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

myWifeBringingTicket.then(t => {
  console.log(`person3: shows ${t}`);
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");

console.log("....................");
// Async-Await //
console.log("person6: shows ticket");
console.log("person7: shows ticket");

const preMovie = async () => {
  const wifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticks"), 3000);
  });
  let ticket = await wifeBringingTicks;

  return ticket;
};

preMovie().then(m => console.log(`person8: shows ${m} `));
console.log("person9: shows ticket");
console.log("person10: shows ticket");
