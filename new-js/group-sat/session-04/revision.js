// const person = {
//   // key: value ; key value pair
//   fristName: "hamza",
//   birthDate: 2003,
//   calcAge: function () {
//     this.age = 2026 - this.birthDate;
//     return this.age;
//   },
// };

// person.calcAge();

// console.log(typeof person);
// console.log(person.fristName);
// console.log(person.age);

// var  not to use

// let - const
// every execution in js => Variable environment (VE) = hoisting  , scope , this keyword

// console.log(x);

// TDZ  => temporal dead zone

let x = 5; // declaration

// console.log(x);

// x; frist scan
// x = 5 ; second scan

// var let const

const great = function () {
  const y = 6;
  console.log("hello" + x);
};

great();

let condition = true;

{
  const z = 5;
  console.log(x);
}

// console.log(z); // 5

if (x > 4) {
  console.log(`${x} is greater than 4`);
}

console.log(this);

const obj = {
  fristName: "abdo",
  age: 23,

  great: function () {
    console.log(`hello ${this.fristName} welcom to ${this.age}`);
  },
};

obj.great();

// this cant work with arrow function

const great2 = () => console.log(this);

great2();
