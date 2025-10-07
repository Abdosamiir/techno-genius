// 1.querySelector(tagname,class,id)
// 2.querySelectorAll

// console.log(document.querySelector(".demo"));
// console.log(document.querySelector("#abdo"));
// console.log(document.querySelector("div"));
// console.log(document.getElementById("abdo"));
// console.log(document.getElementsByClassName("demo"));

// const h1 = document.createElement("h1");
// h1.innerText = "welcome grades";
// h1.className = "text";
// document.body.appendChild(h1);

const inputValue = document.getElementById("num");
const inputText = document.getElementById("texxt");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the number from input
  const numberOfDivs = parseInt(inputValue.value);
  console.log(inputValue.value);

  const textOfInput = inputText.value;
  console.log(textOfInput);

  //   Clear any existing divs
  const removeDivs = document.querySelectorAll(".text");
  removeDivs.forEach((div) => div.remove());

  // Create the specified number of divs
  for (let i = 1; i <= numberOfDivs; i++) {
    const div = document.createElement("div");
    div.innerText = `${textOfInput}`;
    div.className = "text";
    document.body.appendChild(div);
  }
});

// console.log(window);

// alert("hello");

// function sum(x, y) {
//   const sum = x + y;
//   return sum;
// }

// sum(5, 7);
