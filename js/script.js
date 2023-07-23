// select elements
const adviceCode = document.querySelector(".advice-code");
const advices = document.querySelector(".advice");
const diceBtn = document.querySelector(".dice-btn");
const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  adviceCode.textContent = "Loading...";
  advices.innerHTML = `<div class="loading-state"></div>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    const {
      slip: { id, advice },
    } = data;
    adviceCode.innerHTML = `advice #<span class="code">${id}</span>`;
    advices.innerHTML = `<span class="quote">"</span>${advice}<span class="quote">"</span>`;
  } catch (error) {
    adviceCode.textContent = "Error";
    adviceCode.style.color = "#ef0c26";
    advices.textContent = "Sorry, there was an error. Please try again later.";
  }
};

window.addEventListener("DOMContentLoaded", fetchAdvice);

diceBtn.addEventListener("click", () => {
  fetchAdvice();
  diceBtn.classList.toggle("clicked");
});
