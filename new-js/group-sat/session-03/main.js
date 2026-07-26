// // function declaration

// function great() {
//   console.log("hello");
// }
// // call func
// great();

// // function expression (recommended)
// const great = function () {
//   console.log("hello");
// };

// great();

// // parameters and arguments + arrow function dosent support this keyword
// const sum = (x, y) => console.log(x + y);
// // call func
// sum(2, 4);

// const engineer = "abdo samir";
// const student1 = "islam";
// const student2 = "jana";
// const student3 = "anas";
// const student4 = "youssef";
// const student5 = "mohamed";

// array []
// array is zero indexed data structure

// const students = ["islam", "jana", "anas", "youssef", "mohamed"];

// console.log(students[1]);
// const lastElement = students.length - 1;
// console.log(students[lastElement]);

// // console.log(students.length);

// students.push("abdo");

// students.unshift("hamza");

// students.pop();

// students.shift();

// students.unshift("test");

// console.log(students.includes("abdo"));

// console.log(students);

//  objects

const me = {
  // key: value ;
  fristName: "abdo",
  bithDate: 2003,
  calcAge: function () {
    this.age = 2026 - this.bithDate;
    return this.age;
  },
  students: ["anas", "mohammed", "jana"],
};

me.calcAge();

console.log(me.age);
// console.log(me);

// hoisting - scope - this keyword
