const character = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$'];
const getRandomPasswordBtn = document.querySelector('#get-random-password-btn');
const copyBtn = document.querySelector('#copy-btn');
const randomPassword = document.querySelector('#random-password');

function getRandomHexcode() {
    let password = '';

    for (i = 0; i < 10; i++) {
        password += character[getRandomNumber()];
    }
    return password;
}

function getRandomNumber() {
    return Math.floor(Math.random() * character.length);
}

function addContent() {
    randomPassword.textContent = getRandomHexcode();
}

getRandomPasswordBtn.addEventListener('click', () => {
    addContent();
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(randomPassword.textContent);
    alert(`copied '${randomPassword.textContent}'`)
})