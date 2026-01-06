const randomBtn = document.getElementById("randomBtn");
const guessBtn  = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessNum");
const feedbackEl = document.querySelector(".random-number h3");

let target = null;

const rules = [
  { min: 50, msg: "You're way off.", className: "very-far" },
  { min: 30, msg: "You're far.",     className: "far" },
  { min: 10, msg: "Pretty close.",   className: "warm" },
  { min: 5,  msg: "Very close.",     className: "close" },
  { min: 1,  msg: "You're right there!", className: "very-close" },
];

function setFeedback(text, className) {
  feedbackEl.textContent = text;
  feedbackEl.className = `feedback ${className || ""}`.trim();
}

function newGame() {
  target = Math.floor(Math.random() * 100) + 1; // 1..100
  setFeedback("??", ""); // hide the number, show placeholder
  guessInput.value = "";
  guessInput.focus();
  // console.log(target); // enable while debugging
}

randomBtn.addEventListener("click", newGame);

guessBtn.addEventListener("click", () => {
  if (target === null) {
    setFeedback("Click “Click Me” to start a new game first.");
    return;
  }

  const guess = Number(guessInput.value);

  if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
    setFeedback("Enter a whole number from 1 to 100.", "far");
    return;
  }

  const diff = guess - target;
  const absDiff = Math.abs(diff);

  if (absDiff === 0) {
    setFeedback("YOU GOT IT! GOOD JOB!", "winner");
    return;
  }

  const direction = diff > 0 ? "Go lower." : "Go higher.";
  const rule = rules.find(r => absDiff >= r.min) || rules[rules.length - 1];

  setFeedback(`${rule.msg} ${direction}`, rule.className);
});