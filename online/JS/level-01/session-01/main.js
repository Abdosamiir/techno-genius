console.log("test");

// old way of declaration
var x = 5;

var fristName = "mohamed";
var lastName = " moataz";
console.log(fristName + "  " + lastName);

// data types

/*
string => "text"
number => 5 6 7 
boolean => true || false 
undefined
null
object [array is object in js]
*/

// console.log(typeof []);

// console.log(typeof x, typeof yourName);
// can reassign
let y = 3;
y = 7;

console.log(y);

// constant => ثابت
const z = 9;
// z = 8; can't reassign
// console.log(z < x);

console.log(5 == "5"); // compare just a value
console.log(5 === "5"); // false ? compare value and type

// if statment
if (fristName == "mohamed") {
  // console.log("you are right my name is " + fristName);
  // template litral => `` ذ
  console.log(`you are right my name is ${fristName}`);
} else {
  console.log("wrong??");
}
