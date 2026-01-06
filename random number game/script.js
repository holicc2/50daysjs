const randomBtn = document.getElementById("randomBtn");
const randomNumber = document.querySelector(".random-number h3");
const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessNum");

let num;
let guess = "";

function getRandomNum() {
	num = Math.floor(Math.random() * 100) + 1;
	console.log(num);
}

randomBtn.addEventListener("click", () => {
	if (!randomNumber.textContent) {
		randomNumber.textContent = "??";
	}
		getRandomNum();
});

guessBtn.addEventListener("click", () => {
	const raw = guessInput.value.trim();
	// ensure a non-empty integer string and parse it
	if (!/^\d+$/.test(raw)) {
		alert("Enter an integer between 1 and 100");
		return;
	}
	const guess = Number(raw); // safe now because of regex
	if (guess < 0 || guess > 100) {
		alert("Number must be between 1 and 100");
		return;
	}
	if (guess > num && guess - num >= 50) {
		randomNumber.textContent = `You're way high, guess way lower.`;
		randomNumber.style.color = "DarkRed";
	} else if (guess > num && guess - num <= 49 && guess - num >= 29) {
		randomNumber.textContent = `You're high, go lower.`;
		randomNumber.style.color = "Orange";
	} else if (guess > num && guess - num <= 28 && guess - num >= 10) {
		randomNumber.textContent = `Pretty close but no cigar. Go lower.`;
		randomNumber.style.color = "Yellow";
	} else if (guess > num && guess - num <= 9 && guess - num >= 5) {
		randomNumber.textContent = `Very close. You're a slither high...`;
		randomNumber.style.color = "Green";
	}
	if (guess < num && num - guess >= 50) {
		randomNumber.textContent = `You're wayyyy low, guess way higher.`;
		randomNumber.style.color = "DarkRed";
	} else if (guess < num && num - guess <= 49 && num - guess >= 29) {
		randomNumber.textContent = `You're low, go higher.`;
		randomNumber.style.color = "Orange";
	} else if (guess < num && num - guess <= 28 && num - guess >= 10) {
		randomNumber.textContent = `Pretty close. Go higher a bit.`;
		randomNumber.style.color = "Yellow";
	} else if (guess < num && num - guess <= 9 && num - guess >= 5) {
		randomNumber.textContent = `Very close. You're a slither low...`;
		randomNumber.style.color = "Green";
	} else if (
		(guess > num && guess - num >= 4) ||
		(guess < num && num - guess <= 4)
	) {
		randomNumber.textContent = `You're right there. Just a few higher or lower!`;
		randomNumber.style.color = "GreenYellow";
	}
    else if (guess === num) {
        randomNumber.textContent = `YOU GOT IT! GOOD JOB!`;
        randomNumber.classList.add('winner')
    }
});
