"use strict"; // strict mode

// function declaration
// function calc() {
//   console.log(5 + 6);
// }
// calc();

// // function expression
// const sum2 = function () {
//   console.log("hello from expression");
// };

// sum2();

// // arrow function
// const sum = () => console.log("hello world ");

// sum();

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// // Function that uses the cutPieces function
// const fruitProcessor = function (apples, oranges) {
//   const applePieces = cutPieces(apples); // call func in func
//   const orangePieces = cutPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and
// ${orangePieces} pieces of orange.`;

//   return juice;
// };
// console.log(fruitProcessor(2, 3));

// function call function
// const cutpieces = function (f) {
//   return f * 4;
// };

// const x = function (apple, orange) {
//   const appleX = cutpieces(apple);
//   const orangeX = cutpieces(orange);
//   const juice = `Juice with ${appleX} pieces of apple and
//  ${orangeX} pieces of orange.`;
//   return juice;
// };

// console.log(x(4, 3));

// task 1

// console.log(document.getElementById("el").innerText);
// document.getElementById("el");

// Add Variables Here

const num_one = 10;
const numTwo = 20;
const sum = String(num_one) + String(numTwo);
// Ouput
console.log(num_one + "" + numTwo); // Normal Concatenate => 1020
console.log(typeof sum); // Normal Concatenate => String
console.log(`${sum}`); // Template Literals Way => 1020
console.log(typeof `${sum}`); // Template Literals Way => String

console.log(num_one + "\n" + numTwo);
console.log(`${num_one}\n${numTwo}`);

const a = 21;
const b = 20;

const sum2 = b + "" + a;
const sum3 = String(a) + String(b);

console.log(`_${a}_${sum3}_${sum2}_${sum2}_${b}`); // _21_2021_2021_2021_20_

let num = 3;

console.log(num * num - num);

console.log(num + num);

console.log(num * (num - true));

console.log(Math.pow(num, num) - num * num * num + num + num);

console.log(num + "".length + num);
console.log(100 < 1000);

const arr = [1, 2, 3, "abdo", "haya", "hamza"];

const arr2 = new Array(11991, "abdo", "ahmed");

console.log(arr.at(-2));
console.log(arr[2]);

console.log(arr2.length);

// console.log(arr);
// console.log(typeof arr2);

// const bigNumber = 1234567890123456789012345678901234567890n;
// console.log(typeof bigNumber);
