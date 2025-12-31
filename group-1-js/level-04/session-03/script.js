const generateRandomNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let randomNum = generateRandomNum();
console.log(randomNum);
let score = 20;
let highscore = 0;

// select element
const checkBtn = document.querySelector(".check");
const guessNum = document.querySelector(".guess");
const msgDisplay = document.querySelector(".message");
const numberDisplay = document.querySelector(".number");

const displayMessage = (message) => {
  msgDisplay.textContent = message;
};

const showNumber = (number) => {
  numberDisplay.textContent = number;
};

checkBtn.addEventListener("click", () => {
  const guess = Number(guessNum.value);
  if (score === 0) {
    displayMessage("💥 You lost the game!");
    return;
  }

  if (guess === randomNum) {
    showNumber(randomNum);
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberDisplay.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  if (guess !== randomNum) {
    if (!guess) {
      displayMessage("⛔ No number!");
      return;
    }

    msgDisplay.textContent = guess > randomNum ? " 📈too high" : "📉 too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNum = generateRandomNum();
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  showNumber("?");
  guessNum.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  numberDisplay.style.width = "15rem";
});
