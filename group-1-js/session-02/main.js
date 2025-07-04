"use strict"; // strict mode

// function declaration
function calc() {
  console.log(5 + 6);
}
calc();

// function expression
const sum2 = function () {
  console.log("hello from expression");
};

sum2();

// arrow function
const sum = () => console.log("hello world ");

sum();

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
const cutpieces = function (f) {
  return f * 4;
};

const x = function (apple, orange) {
  const appleX = cutpieces(apple);
  const orangeX = cutpieces(orange);
  const juice = `Juice with ${appleX} pieces of apple and
 ${orangeX} pieces of orange.`;
  return juice;
};

console.log(x(4, 3));
