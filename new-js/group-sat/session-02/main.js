// // my name is abdo iam 23 years old

// const fristName = "abdo";
// let age = 23;

// // old way (string concatenation)
// console.log(
//   "my name is " +
//     " " +
//     fristName +
//     " " +
//     "iam " +
//     " " +
//     age +
//     " " +
//     "years old",
// );

// // new way (template literals => ` `)

// console.log(`my name is ${fristName} iam ${age} years old`);

// // if statement
// if (age > 24) {
//   console.log(`yes iam ${age} years old`);
// } else {
//   console.log("No");
// }

// // console.log(typeof String(1));

// // console.log(typeof Number("22"));

// // let sum = 1 + "1"; // 11

// // console.log(typeof sum, sum);

// // console.log(Number("abdo")); // NaN (not a number)

// // const money = 0;

// // if (money) {
// //   console.log("Don't spend it all!");
// // } else {
// //   console.log("You should get a job!");
// // }

// // let height;
// // console.log(height);

// // if (height) {
// //   console.log("Height is defined");
// // } else {
// //   console.log("Height is UNDEFINED");
// // }

// console.log("5" == 5); // value = value
// console.log("5" === 5); // value = value && type = type

// let x = 2;

// // if (x) {
// //   console.log("you are right");
// // } else {
// //   console.log("you are wrong!!");
// // }

// // ternary operator
// const result = x ? "true" : "false";
// console.log(result);

// // switch statement
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;

//   default:
//     console.log("Not a valid day!");
//     break;
// }

// console.log("==========================");
// // Equivalent if/else structure
// if (day === "monday") {
//   console.log("Plan course structure");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else {
//   console.log("Not a valid day!");
// }

// functions  ( declaration vs expression vs arrow functions )
// dry dont repeat yourself
// const sum = 1 + 2;
// const sum2 = 2 + 3;
// console.log(sum);

// sum(5, 6);

// // declaration function
// function sum(x, y) {
//   return console.log(x + y);
// }
// calling the function

// expression function

// const sum = function (x, y) {
//   return console.log(x + y);
// };

// sum(5, 6);

// arrow function
const sum = (x, y) => console.log(x + y);

sum(6, 6);
