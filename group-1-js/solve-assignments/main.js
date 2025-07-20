// Replace ? With Arithmetic Operators
console.log(((1 * 2 * 15) % 3) * 190 * 10 * 400); // 0

let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num + --num + --num - --num); // 20
// console.log(10 + 9 + 8 - 7);

// Solution Three
console.log(--num * --num - +num - +num); // 20
// console.log(6 * 5 - 5 - 5);
// Solution Four
console.log(+num * +num - +num); // 20

console.log("================================");

let points = 10;

points += 3;

console.log(points); // 13

points -= 5;

console.log(points); // 8;

console.log("================================");
let num1 = 10;
let num2 = 20;

console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(typeof num1 === typeof num2); // true
console.log(!(num1 === num2)); // true
console.log(num2 >= num1); // true

let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a > b); // true
console.log(a != b > a > c); // true
console.log(!(a == b) && !(a > b) && !(a < c) && !(a == c)); // true

console.log("================================");

let numValue = 9;
let str = "9";
let str2 = "20";

// Check if numValue and str have the same value (loose equality)
if (numValue == str) {
  console.log(`${numValue} Is The Same Value As ${str}`);
}

// Check if numValue and str have the same value but different types
if (numValue == str && numValue !== str) {
  console.log(`${numValue} Is The Same Value As ${str} But Not The Same Type`);
}

// Check if numValue and str2 have different values and different types
if (numValue !== str2) {
  console.log(`${numValue} Is Not The Same Value Or The Same Type As ${str2}`);
}

// Check if str and str2 have the same type but different values
if (typeof str === typeof str2 && str != str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
}

console.log("================================");

let x = 10;
let y = 30;
let z = "30";

// Check if y is larger than x and has different type than x
if (y > x) {
  console.log(
    `${y} Is Larger Than ${x} And Type ${typeof z} Not The Same Type As ${typeof x}`
  );
}

// Check if y is larger than x, z has same value as y but different type
if (y > x && z == y && typeof z !== typeof y) {
  console.log(
    `${y} Is Larger Than ${x} And Value Is The Same As ${z} And Type ${typeof z} Not The Same Type As ${typeof y}`
  );
}

// Check if z value and type is not the same as x and type is not the same as y
if (z != x && typeof z !== typeof x && typeof z !== typeof y) {
  console.log(
    `${z} Value And Type Is Not The Same As ${x} And Type Is Not The Same As ${y}`
  );
}

console.log("================================");

// Edit What You Want Here

let n1 = 12;
let n2 = 5;
let n3 = 12;
let n4 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (n1 > n2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (n1 > n2 && n1 < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (n1 > n2 && n1 === n3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (n1 + n2 < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (n1 + n3 < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (n1 + n2 + n3 < n4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (n4 - (n1 + n3) + n2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.log("================================");

//switch

let day = "friday";

// day = day.trim();
// day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

console.log(day);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;

  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;

  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;

  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;

  default:
    console.log("Its Not A Valid Day");
}

console.log("================================");

// Calculator Function
function calculate(firstNum, secondNum, operation) {
  // Check if second number is not provided
  if (secondNum === undefined) {
    return "Second Number Not Found";
  }

  // If operation is not provided, default to addition
  if (operation === undefined) {
    return firstNum + secondNum;
  }

  // Handle different operations
  switch (operation) {
    case "add":
      return firstNum + secondNum;
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
    case "division":
      return firstNum / secondNum;
    default:
      return firstNum + secondNum; // Default to addition for unknown operations
  }
}

// Test the function with the needed outputs
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600
console.log(calculate(20, 30, "division").toFixed(2)); //0.6

console.log("================================");

// Greeting Function
function sayHello(theName, theGender) {
  // Check if gender is provided
  if (theGender === undefined) {
    return `Hello ${theName}`;
  }

  // Handle different genders
  if (theGender === "Male") {
    return `Hello Mr ${theName}`;
  } else if (theGender === "Female") {
    return `Hello Miss ${theName}`;
  } else {
    // If gender is provided but not recognized, use default greeting
    return `Hello ${theName}`;
  }
}

// Test the function with the needed outputs
console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
console.log(sayHello("Sameh")); // "Hello Sameh"

console.log("================================");

// Age in Time Function
function ageInTime(theAge) {
  // Check if age is out of range (assuming max age is 100)
  if (theAge < 10 || theAge > 100) {
    return "Age Out Of Range";
  }

  // Convert age to months
  let months = theAge * 12;
  return `Months Example => ${months} Months`;
}

console.log(ageInTime(110));
console.log(ageInTime(38));

function sayHello(theName, theGender) {
  if (theGender === undefined) console.log(`hello ${theName}`);
  if (theGender === "Male") console.log(`hello mr ${theName}`);
  if (theGender === "Female") console.log(`hello mrs ${theName}`);
}
// Needed Output
sayHello("abod", "Male");
sayHello("haya", "Female");
