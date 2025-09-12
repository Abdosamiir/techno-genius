const arr = ["abdo", "samir", "engineer", 22];

console.log(arr[0]);

const types = [];

for (let i = 0; i < arr.length; i++) {
  // console.log(typeof arr[i]);
  types.push(typeof arr[i]);
}

console.log(types);

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") continue;
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") break;
  console.log(arr[i]);
}

// while loop
// let i = 1;
// while (i <= 10) {
//   console.log(`Lifting weights repetition ${i}`);
//   i++;
// }

// for loop
for (let i = 1; i <= 10; i++) {
  console.log(`hello ${i}`);
}

const arr2 = ["Jonas", "Schmedtmann", 45, "teacher", 22];
console.log(arr2);

for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]);
}

// do while
let i = 1; // init
do {
  console.log(`The number is ${i}`);
  i++; // update
} while (i <= 10); // condition
