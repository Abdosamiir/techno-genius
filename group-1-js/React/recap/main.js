// const person = {
//   name: "abdo ",
//   age: 23,
//   city: "mansoura",
//   isMarried: false,
//   isGraduated: true,
// };
// // destructuring of object
// const { name, age, isMarried } = person;
// console.log(isMarried);

// // destructuring of array
// const arr = ["abdo", 23, "mansoura", false, true];

// const [fristName, abdoAge] = arr;

// console.log(abdoAge);

// // rest operator
// function introduce(name, age, ...hobbies) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Hobbies:`, hobbies);
// }

// introduce("abdo", 23, "reading", "traveling", "coding", "swimming", "test");

// // const [first, second, ...others] = [10, 20, 30, 40, 50];

// // console.log(first);   // 10
// // console.log(second);  // 20
// // console.log(others);  // [30, 40, 50]

// //spread operator
// const numbers = [1, 2, 3];
// console.log(...numbers);

// // ternari operator
// const age = 17;
// const result = age >= 18 ? "you are right" : "you are not right";

// console.log(result);

// // tamlete literals
// const name = "abdo";
// // const age = 23;
// const city = "mansoura";

// // console.log("my name is" +" " +name);

// console.log(`my name is ${name} and my age is ${age} and my city is ${city}`);

// // const sum = function (a, b) {
// //   return console.log(a + b);
// // };

// const sum = (a, b) => console.log(a + b);
// sum(10, 20);

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Ali" },
];

const names = users.map((user) => user.name);
console.log(names);
// ["Ahmed", "Sara", "Ali"]

const people = [
  { name: "Ahmed", age: 20 },
  { name: "Sara", age: 16 },
  { name: "Ali", age: 25 },
];

const adults = people.filter((person) => person.age >= 21);

console.log(adults);

const fruits = ["Banana", "Apple", "Cherry", "Dragonfruit"];

fruits.sort();

console.log(fruits);
// ["Apple", "Banana", "Cherry", "Dragonfruit"]

const arr = [1, 2, 3, 4, 5];
arr.sort((a, b) => a - b);

console.log(arr);
