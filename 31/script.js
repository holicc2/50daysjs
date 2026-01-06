const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const inputEl = document.getElementById('input')
const goBtn = document.getElementById('inputBtn')
let text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value
let input = ''
let timerId = null

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    // store timer id so we can clear/restart the loop safely
    timerId = setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value

    // restart loop immediately so new speed takes effect
    if (timerId) {
        clearTimeout(timerId)
        timerId = null
        writeText()
    }
});

inputEl.addEventListener('input', (e) => {
    input = e.target.value;
})

// allow pressing Enter to trigger Go
inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') goBtn.click()
})

goBtn.addEventListener('click', () => {
    text = input || ''
    idx = 1
    if (timerId) {
        clearTimeout(timerId)
        timerId = null
    }
    writeText()
})