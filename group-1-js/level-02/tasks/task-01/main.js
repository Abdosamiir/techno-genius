// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(Math.ceil(99999.9));
console.log(Math.round(99999.9));
console.log(Math.floor(100000.2));
// console.log()
console.log(50000 + 50000); // 100000
console.log(150000 - 50000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(1e5); // 100000
console.log(parseInt("100000")); // 100000
console.log(~~100000.99); // 100000
console.log(Number.MAX_VALUE);
////////////////////////////////////////

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Number.MAX_SAFE_INTEGER + 1;

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16

let myVar = "100.56789 views";
console.log(parseInt(myVar)); // 100
console.log(Number(myVar).toFixed(2));
console.log(parseFloat(myVar));

let num = 10;
console.log(num.toString().length); // 2

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(~~flt); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

let userName = "Elzero";

console.log(userName[0].toLowerCase()); // e
console.log(userName.at(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[3].repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLowerCase().includes("o")); // true
console.log(word.toLowerCase().includes(letterE)); // true
console.log(word.includes(letterO)); // false

let index = 10;
let jump = 2;

// for (;;) {
//   // Write Your Code Here
//   console.log(index);
//   index -= jump;
//   if (index < 4) break;
// }

// // Output
// // 10
// // 8
// // 6
// // 4

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter = 1;

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i].toLowerCase().charAt(0) !== letter) {
//     console.log(`${counter} => ${friends[i]}`);
//     counter++;
//   }
// }

// // Output
// // "1 => Sayed"
// // "2 => Eman"
// // "3 => Mahmoud"
// // "4 => Osama"
// // "5 => Sameh"

// let swappedName = "elZerO";
// let result = "";

// // console.log(swappedName[5]);
// for (let i = 0; i < swappedName.length; i++) {
//   //   if (swappedName[i] === swappedName[i].toLowerCase()) {
//   //     result += swappedName[i].toUpperCase();
//   //   } else {
//   //     result += swappedName[i].toLowerCase();
//   //   }
//   swappedName[i] === swappedName[i].toLowerCase()
//     ? (result += swappedName[i].toUpperCase())
//     : (result += swappedName[i].toLowerCase());
// }
// console.log(result);

// // Output
// // "ELzERo"

// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = 1; i < mix.length; i++) {
//   if (typeof mix[i] === "number") {
//     console.log(mix[i]);
//   }
// }

// // Output
// // 2
// // 3
// // 4

// let friendsList = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let currentIndex = 0;
// let displayCounter = 0;

// while (currentIndex < friendsList.length) {
//   if (
//     typeof friendsList[currentIndex] === "string" &&
//     friendsList[currentIndex].toLowerCase().charAt(0) !== "a"
//   ) {
//     displayCounter++;
//     console.log(`${displayCounter} => ${friendsList[currentIndex]}`);
//   }
//   currentIndex++;
// }

// // Output
// // "1 => Sayed"
// // "2 => Mahmoud"
// task 1
for (let i = 10; i <= 100; i += 10) {
  if (i == 40) continue;
  console.log(i);
}
console.log("=============================");
// task 2
for (let i = 10; i >= 3; i--) {
  if (i < 10) {
    console.log("0" + i);
  } else {
    console.log(String(i));
  }
}

console.log("=============================");
for (let i = 1; i <= 6; i++) {
  console.log(i);
  for (let j = 2; j <= 4; j += 2) {
    console.log("-- " + j);
  }
}
