const counter = document.querySelector(".counter");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

let active = false;
let i =0;
let timerId = null;

// initialize display
// ...existing code...
// initialize display

function formatTime(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, '0')}h : ${String(m).padStart(2, '0')}m : ${String(s).padStart(2, '0')}s`;
}

counter.innerHTML = formatTime(i);

startBtn.addEventListener("click", updateTime);

pauseBtn.addEventListener("click", () => {
	if (active) {
		active = false;
		clearInterval(timerId);
	}
});

stopBtn.addEventListener("click", () => {
	active = false;
	i = 0;
	clearInterval(timerId);
	counter.innerHTML = formatTime(i);
});

function updateTime() {
	if (!active) {
		active = true;
		timerId = setInterval(() => {
			i += 1000;
			counter.innerHTML = formatTime(i);
		}, 1000);
	}
}
