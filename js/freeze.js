const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };

const keys = Object.keys(bottle);
//console.log(keys);

const values = Object.values(bottle);
//console.log(values);

const pair = Object.entries(bottle);
//console.log(pair);

// seal

// console.log(bottle);
// //Object.seal(bottle);
// delete bottle.isCleaned;
// bottle.height = 12;
// console.log(bottle);

// freeze

console.log(bottle);
//Object.freeze(bottle);
delete bottle.isCleaned;
bottle.height = 12;
console.log(bottle);