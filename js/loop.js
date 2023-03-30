const numbers = [12, 54, 65, 3, 54];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }
for (const number of numbers) {
    //console.log(number);
}

const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };

const keys = Object.keys(bottle);
// for (const key of keys) {
//     console.log(key);
// }
for (const key in bottle) {
    //console.log(key);
    const value = bottle[key];
    console.log(key, value);
}