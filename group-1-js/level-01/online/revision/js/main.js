// this comment in JS

/* 
javascript is an interprrete language => the runtime is line by line 
*/

// console.log(10 + 15 + 20);
// console.log(10 + 20 + 20);

// alert("welcome"); built in function

// data type
/*
number 
string 
boolean
object => arrays
undefined  falsy values
null falsy values
sympol 
bigint
*/

// var x; //frist look
// x = 5; // second look

// var x = 5;
// console.log(x);

// let z = 3;
// console.log(typeof z, z);
// z = 5; // reassign
// z = "hello";
// // z = 4;
// console.log(z);

const title = "welcome"; // constant => ثابت
// can't redeclare const title = "wel";
// can't reassign  title = 5;
console.log(typeof title, title);

// const _year = 2003;
// camelCase const inputData = 5;

// console.log(typeof []); array is object

console.log(typeof null); // return object  this is a bug in javascript

let x = 5;
// x++; // x = x +1
// console.log(x); //6

let y = "5";

console.log(x == y); // true only value
console.log(x === y); // false value and type

//////////////////////////
const firstName = "abdo";
const job = "teacher";
const birthYear = 2003;
const year = 2025;

// take desicion
if (birthYear > 2000) {
  console.log("this is a teenager");
} else {
  console.log("still  young");
}

/*
if (condition) {
 Code executed when condition is TRUE 
 }
 else { 
 Code executed when condition is FALSE (optional)
 }
*/

// Old way (string concatenation)
const jonasOld =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " year old " +
  job +
  " " +
  "!";
console.log(jonasOld);
// New way (template literals)
const jonasNew = `I'm ${firstName} , a ${year - birthYear} year old  
${job}!`;
console.log(jonasNew);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷 ";
// } else {
//   drink2 = "water 💧 ";
// }
const age = 25;
const drink = age >= 18 ? "wine" : "water"; // ternary opreator
console.log(drink);

//////////////////////////////

sum(); // call func
// function declaration
function sum() {
  console.log("hello from function declaration");
}

// function Expression => can't call a func before initialization
const sum2 = function () {
  console.log("hello from Function Expression");
};

sum2();
// arrow function
const arrow = () => console.log("hello from arrow Function ");
arrow();

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years!`;
};
console.log(yearsUntilRetirement(2003, "abdo"));

// function calling other function

// Function to cut fruit into pieces
const cutPieces = function (fruit) {
  return fruit * 4;
};

// cutPieces(4);

// Function that uses the cutPieces function
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and
${orangePieces} pieces of orange.`;
  return juice;
};
console.log(fruitProcessor(2, 3));

// array is object

// console.log(typeof []);

const arr = [1, 2, "abdo"];
arr.push("hasan");

console.log(arr);

// const arr2 = new Array();

const obj = {
  name: "abdo",
  age: 22,
};

// const obj2 = new Object();

//for loop
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} ==for loop `);
}

//while loop
let i = 1;
while (i <= 10) {
  console.log(`Lifting weights repetition ${i} == while loop `);
  i++;
}

for (let i = 1; i <= 10; i++) {
  console.log("welcome mohamed");
}

const jonasArray = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher"];

console.log(jonasArray[2]);

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  // Filling a new array
  types.push(typeof jonasArray[i]);
}
console.log(types);
