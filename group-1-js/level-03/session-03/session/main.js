const inputEl = document.querySelector("input");
const resultEl = document.querySelector(".result");

inputEl.addEventListener("input", (e) => {
  const dollarValue = 48;
  const inputValue = e.target.value;
  const convertValue = inputValue * dollarValue;
  resultEl.textContent = `${inputValue} USD Dollar = ${convertValue} Egyptian Pound`;
});
