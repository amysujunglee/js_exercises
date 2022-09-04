const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const getRandomColorBtn = document.querySelector('#getRandomColorBtn');
const randomColorHex = document.querySelector('#randomColorHex');

function getRandomHexcode() {
    let hexColor = '#';

    for (i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function addContent() {
    document.body.style.backgroundColor = getRandomHexcode();
    randomColorHex.textContent = getRandomHexcode();
}

getRandomColorBtn.addEventListener('click', () => {
    addContent();
});

window.addEventListener('load', () => {
    addContent()
});