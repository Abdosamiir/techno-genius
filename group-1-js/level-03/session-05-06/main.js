//  scrolling smoothly to a section

// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Prevent default jump behavior
    e.preventDefault();

    // Get the target section id from href
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Scroll smoothly to the target section
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // You can now use the data here
    displayCards(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Store cards data globally
let cardsData = [];

// Function to display cards
function displayCards(cards) {
  cardsData = cards;
  const container = document.querySelector(".container");

  // Clear existing cards
  container.innerHTML = "";

  // Create and append new cards
  cards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <img src="${card.image}" alt="${card.title}" />
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    container.appendChild(cardDiv);
  });

  // Add event listeners to all delete buttons
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      deleteCard(index);
    });
  });
}

// Function to delete a card
function deleteCard(index) {
  cardsData.splice(index, 1);
  displayCards(cardsData);
}

// Function to show the form
function showForm() {
  const formContainer = document.getElementById("formContainer");
  formContainer.style.display = "flex";
}

// Function to hide the form
function hideForm() {
  const formContainer = document.getElementById("formContainer");
  const form = document.getElementById("addRecipeForm");
  form.reset();
  formContainer.style.display = "none";
}

// Function to add a new card from form data
function addCard(e) {
  e.preventDefault();

  const title = document.getElementById("recipeTitle").value;
  const image = document.getElementById("recipeImage").value;
  const description = document.getElementById("recipeDescription").value;

  const newCard = {
    id: cardsData.length + 1,
    image: image,
    title: title,
    description: description,
  };

  cardsData.push(newCard);
  displayCards(cardsData);
  hideForm();
}

// Add event listener to the add button to show form
const addBtn = document.querySelector(".add-btn");
if (addBtn) {
  addBtn.addEventListener("click", showForm);
}

// Add event listener to the form submit
const form = document.getElementById("addRecipeForm");
if (form) {
  form.addEventListener("submit", addCard);
}

// Add event listener to the cancel button
const cancelBtn = document.querySelector(".cancel-btn");
if (cancelBtn) {
  cancelBtn.addEventListener("click", hideForm);
}
