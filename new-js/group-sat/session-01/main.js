// // console.log("hello");

// // function
// // alert("test");

// const javascript = "text";

// // if else statment
// if (javascript == "x") {
//   console.log("you are right");
// } else {
//   console.log("check your variable");
// }

// // data types

// /*

// -- string "text"
// -- number 5
// -- boolean true false
// -- object [array is object in js]
// -- null note its a bug [null is object]
// -- undefined

// */

// // let fristName = "abdo";
// // console.log(typeof fristName);

// // declare

// // let x = 5;
// // x = "hamada"; // reassign
// // console.log(x);

// // const y = 3;
// // y = "test";

// // console.log(y);

// // abdo samir

// const fristName = "abdo";
// const lastName = "samir";

// console.log(fristName + " " + lastName);
// // x +=  10;  => x = x + 10

// let x = 1;
// x++; // x = x + 1
// x--;

// console.log(x);

const x = 5;
const y = "5";

// console.log(x == y); // compare value with value
// console.log(x === y); // compare value and type

// console.log(x !== y);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// Old way (string concatenation)
const jonasOld =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonasOld);

// New way (template literals)
const newName = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(newName);
