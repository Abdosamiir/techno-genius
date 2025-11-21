"use strict";

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

//map filter flat faltMap find

// higher order functions

//map
// breeds.map((dog) =>
//   console.log(dog.breed, dog.averageWeight, dog.activities[0])
// );

// const bullDog = breeds.filter((dog) => {
//   dog.breed.includes("Bulldog");
// });

// method chain
// const swimmingAdjacent = breeds
//   .filter((breed) => breed.activities.includes("swimming"))
//   .map((dog) => {
//     console.log(dog.breed);
//   });

// console.log(swimmingAdjacent);

//find
// const huskyWeight = breeds.find((dog) => dog.averageWeight === 18).breed;
// console.log(huskyWeight);

// const allActivities = breeds.map((dog) => dog.activities).flat();
// console.log(...new Set(allActivities));

// select elment

const showBtns = document.querySelectorAll(".show-modal");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
