// const person = {
//   // key : value,
//   color: "blue",
//   student: ["ahmed", "ali", "mohamed", , "test"],
// };

// console.log(person.color);

// for (let i = 1; i <= 10; i++) {
//   // excution code
//   console.log(i);
// }

const arr = [
  "abdo",
  "samir",
  2026 - 2003,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const new_arr = arr[arr.length - 1];

console.log(new_arr);

const newTypes = [];
// primitive data types => string , number, boolean, undefined, null
// non-primtive data types => object

// console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], typeof arr[i]);

  newTypes.push(typeof arr[i]);
}

console.log(newTypes);

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} `);
  rep++;
}
