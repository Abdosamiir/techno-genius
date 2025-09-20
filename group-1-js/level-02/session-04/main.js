const title = "wlecome dev";
console.log(title.length);

// const obj = {
//   name: "mohamed",
// };

// console.log(obj.name);
// console.log(obj);

// const x = 5;

// console.log("hello " + x + " hands" + x + "");
// console.log(`hello ${x} hands`);

console.log(title.at(-1));
console.log(title.at(10));
console.log(title.charAt(4));

// console.log("hello ".concat(x));
console.log(title.slice(3, 7));

const word = "abdo     samir";
// console.log(word.slice(5))
const word2 = "ABDO SAMIR";
// console.log(word.toUpperCase());
// console.log(word2.toLowerCase());
// console.log(word);
// console.log(word.trim());
// console.log(word.trimStart());

// Remove all spaces
console.log(word.replaceAll(" ", ""));

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

console.log(word.split(""));

const x = 5.6;

// console.log(x.toString());
// console.log(x.toFixed(3));
console.log(Number("5"));
console.log(Number.isFinite(154));

// Math
console.log(Math.PI); //3.14

console.log(Math.round(x));
console.log(
  Math.ceil(4.9),
  Math.ceil(4.7),
  Math.ceil(4.4),
  Math.ceil(4.2),
  Math.ceil(-4.2)
);
console.log(
  Math.floor(4.9),
  Math.floor(4.7),
  Math.floor(4.4),
  Math.floor(4.2),
  Math.floor(-4.2)
);
console.log(
  Math.trunc(4.9),
  Math.trunc(4.7),
  Math.trunc(4.4),
  Math.trunc(4.2),
  Math.trunc(-4.2)
);

console.log(Math.random(1, 10));
console.log(Math.pow(3, 2));
console.log(Math.abs(-4.7));
// task 1
for (let i = 10; i <= 100; i += 10) {
  if (i == 40) continue;
  console.log(i);
}
// task 2
for (let i = 10; i >= 3; i--) {
  if (i < 10) {
    console.log("0" + i);
  } else {
    console.log(String(i));
  }
}

for (let i = 1; i <= 6; i++) {
  console.log(i);
  for (let j = 2; j <= 4; j += 2) {
    console.log("-- " + j);
  }
}
