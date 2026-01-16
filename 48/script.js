const container = document.querySelector('.container')
const picsumURL = 'https://picsum.photos/'
const rows = 20

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${picsumURL}${getRandomSize()}`
    container.appendChild(img)
}

console.log(getRandomNr())


function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}