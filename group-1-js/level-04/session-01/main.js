// console.log(document);

// const obj = {
//   firstName: "mohamed",
//   lastName: "khaled",
//   age: 15,
// };

// console.log(obj.firstName , obj.lastName , obj.age);
// console.log(obj.firstName)

const btnOpen = document.getElementById("btn-open");
// const btnClose = document.getElementById("btn-close");
const slide = document.getElementsByClassName("links");
console.log(slide);
// console.log(btn);

btnOpen.addEventListener("click", () => {
  if (!btnOpen.classList.contains("active")) {
    btnOpen.innerHTML = "close";
  }
  slide[0].classList.toggle("active");
});
