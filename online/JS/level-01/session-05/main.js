// const person = {
//   // key: value ;
//   firstName: "mohamed",
//   birthYear: 2012,
//   calcAge: function () {
//     return (person.age = 2026 - person.birthYear);
//   },
//   student: ["ahmed", "mohamed"],
// };

// person.calcAge();

// console.log(person.firstName);
// console.log(person.student[0]);

// excution
// avoid using var
// console.log(x);

// // temporary dead zone (TDZ)

// let x = 5;

// // excution => variable environment (VE) = hoisting  , scope , this keyword

// // frist scan  // var x; x = undefined
// // second scan // x = 6

// function sum() {
//   //   let x = 3;
//   console.log(x);
// }

// sum();

// // block scope
// // {
// //   let z = 3;
// //   console.log(z);
// // }

// const obj = {
//   name: "mohamed",
//   great: function () {
//     console.log(`hello ${this.name}`);
//   },
// };

// // this keyword does not work in arrow function

// obj.great();

// iteration
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

const arr = [
  "abdo",
  "mohamed",
  34,
  "teacher",
  ["Michael", "Peter", "Steven"],
  1,
  "test",
];

let types = [];
for (let i = 0; i < arr.length; i++) {
  types.push(typeof arr[i]);
}

console.log(types);
