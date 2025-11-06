// const arr = ["abdo", "haya", "hamza", "elderberry"];

// // console.log(arr);
// // Using for loop
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// // using map
// arr.map((name, i) => {
//   console.log(name);
//   //   console.log(i);
//   //   console.log(arr);
// });

// Select elements
const input = document.getElementById("num");
const inputText = document.getElementById("word");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the number from input
  const numberOfDivs = input.value;
  const textOfInput = inputText.value;
  console.log(numberOfDivs, textOfInput);

  // Create the specified number of divs
  // for (let i = 1; i <= numberOfDivs; i++) {
  //   const div = document.createElement("div");
  //   div.innerText = `${textOfInput}`;
  //   div.className = "text";
  //   document.body.appendChild(div);
  // }

  // remove previous divs
  const prevDivs = document.querySelectorAll(".text");
  prevDivs.forEach((div) => div.remove());

  Array.from({ length: numberOfDivs }).map((_, i) => {
    const div = document.createElement("div");
    div.innerText = `${textOfInput}`;
    div.className = "text";
    document.body.appendChild(div);
  });
});
