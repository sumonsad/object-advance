// const start = new Date();
// let sum = 0;
// for (let i = 0; i < 100000000; i++) {
//     sum++;  
// }

// let end = new Date();
// console.log(start - end);

let today = new Date()
//let birthday = new Date('June 21 1984');
// let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
// let birthday = new Date(1995, 11, 17, 3, 24, 0)
// let birthday = new Date(628021800000)            // passing epoch timestamp

console.log(birthday);
