// // global scope
// // var x = 5;
// const x = 5;

// // x;
// // func sum ()

// // x=5
// // x=10

// // function scope
// function sum() {
//   const x = 10;
//   console.log(x);
// }

// sum();

// console.log(x);

// // block scope
// // {
// //   const y = 5;
// // }
// // console.log(y);

// Array of names

// Create a container div for the names
const container = document.createElement("div");
container.style.padding = "20px";
container.style.fontFamily = "Arial, sans-serif";
document.body.appendChild(container);

// Add a title
const title = document.createElement("h2");
title.textContent = "List of Names";
title.style.color = "#333";
container.appendChild(title);

const names = ["abdo", "haya", "hamza", "berry", "mohamed"];

// for (let i = 0; i < names.length; i++) {
//   const element = document.createElement("p");
//   element.className = "text";
//   element.textContent = `${i + 1}. ${names[i]}`;
//   container.appendChild(element);
// }

// names.forEach(function (name, i, arr) {
//   const element = document.createElement("p");
//   element.className = "text";
//   element.textContent = `${i + 1}. ${name}`;
//   container.appendChild(element);
//   arr[i] = name.toUpperCase();
//   //   console.log(arr);
// });

// names.map((name, i, arr) => {
//   const element = document.createElement("p");
//   element.className = "text";
//   element.textContent = `${i + 1}. ${name}`;
//   container.appendChild(element);

//   //   arr[i] = name.toUpperCase();
//   console.log(arr);
// });

names
  .filter((name) => name.includes("a"))
  .map((name, i) => {
    const element = document.createElement("p");
    element.className = "text";
    element.textContent = `${i + 1}. ${name}`;
    container.appendChild(element);
  });
