// alert("welcome"); // built in function
// declare variable
// data types 7
//take decision

// var str = "haya";
// var str = 6;

// const x = undefined;

// const str = "haya ";
// const str = 56; // cant reassign value

// console.log(5 - "6"); //55

// let x = 5; // number
// console.log(x);
// var str = "abdo"; // string
// var bool = true; // boolean

// var y;

// console.log(y);

// undefined
// null

console.log(315 - "5");

const num = 50;
const ageJonas = num - 30;
// const ageSarah = num - 10;

// console.log(ageJonas > ageSarah); //20 > 40
console.log(`my age is ${ageJonas}`);

// if (ageJonas > 19) {
//   console.log("iam 20 years old ");
// } else {
//   console.log("i smaller than 20 years old");
// }

const x = 5;
const y = "5";

// const sum = x + y;
// console.log(sum);

console.log(x == y); // value => value   true
console.log(x === y); // type & value   false

// const favourite = prompt("What's your favourite number?"); // return string
// console.log(typeof favourite); // string

// // string not equal number
// if (favourite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// becare with falsy value
let money = 5000;

console.log(money);
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

// teranry operator
// const abdo =
//   money >= 200
//     ? console.log("Don't spend it all!")
//     : console.log("You should get a job!");
// console.log(abdo);

const age = 22;

console.log(`iam ${age >= 22 ? "25" : "26"} years old `);

const day = "monday";

if (day === "monday" || day === "tuesday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

//convert to switch statement

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("record");
    break;
  default: // Like 'else' - runs if no case matches
    console.log("Not a valid day!");
}

// ! NOT
// || OR
// && AND
