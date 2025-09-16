// console.log("text");
/* this is multiple comment */
// console.log(document); the browser page

// 1. querySelector => get the frist element
// 2. querySelectorAll => get all element with (id or class) (#.. , . )
// 3. getElementById => get the element have this id
// 4. getElementsByClassName => get the element have this class

// document.querySelector(".text");
// document.querySelectorAll(".text");
// document.getElementById("text");
// document.getElementsByClassName("text")

// document.body.append(
//   (document.createElement("div").innerText = "welcome mohamed")
// );

const h1 = document.createElement("h1");
h1.innerText = "welcome mohamed";
h1.className = "text";
document.body.appendChild(h1);
// h1.style.backgroundColor = "red";
// h1.style.color = "#fff";
// h1.style.width = "fit-content";
// h1.style.margin = "auto";
// h1.style.padding = "15px";

// function declaration
// function createParagraph() {
//   document.getElementById("demo").innerText = "hello world";
// }

// function expression
// const createParagraph = function () {
//   document.getElementById("demo").innerText = "hello world";
// };

//arrow function
const createParagraph = () =>
  (document.getElementById("demo").innerText = "hello world");

for (let i = 1; i <= 10; i++) {
  const div = document.createElement("div");
  div.innerText = `hello world iterate ${i}`;
  div.className = "text";
  document.body.append(div);
}


// ازيك يا محمد 