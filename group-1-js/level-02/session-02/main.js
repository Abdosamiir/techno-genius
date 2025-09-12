//declaration

function changeTxt() {
  const para = document.createElement("p");
  para.textContent = "this is new pargraph";
  document.getElementById("demo").innerHTML = `Hello JavaScript! ${5 + 6}`;
  document.body.appendChild(para);
}

//expression
// const changeTxt = () => {
//   document.getElementById("demo").style.backgroundColor = "#00ff87";
//   document.getElementById("demo").style.fontSize = "35px";
// };

const div = document.createElement("div");
div.innerText = "hello haya";
div.className = "text";
console.log(div);
// div.style.width = "fit-content";
// div.style.backgroundColor = "red";
// div.style.padding = "10px";
// div.style.border = "5px solid blue";
// div.style.marginTop = "15px";

for (let i = 1; i <= 5; i++) {
  const div = document.createElement("div");
  div.innerText = "hello haya";
  div.className = "text";
  // console.log(div);
  document.body.appendChild(div);
}


