const lottery_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const fifth = document.querySelector('#fifth');
const sixth = document.querySelector('#sixth');
const getBonusNumber = document.querySelector('#get-bonus-number');

const getLotteryNumbersBtn = document.querySelector('#get-lottery-numbers-btn');

function randomIndex() {
    return Math.floor(Math.random() * lottery_number.length);
}

getLotteryNumbersBtn.addEventListener('click', () => {
    first.textContent = lottery_number[randomIndex()];
    second.textContent = lottery_number[randomIndex()];
    third.textContent = lottery_number[randomIndex()];
    fourth.textContent = lottery_number[randomIndex()];
    fifth.textContent = lottery_number[randomIndex()];
    sixth.textContent = lottery_number[randomIndex()];

    getBonusNumber.textContent = lottery_number[randomIndex()];
});

first.textContent = lottery_number[randomIndex()];
second.textContent = lottery_number[randomIndex()];
third.textContent = lottery_number[randomIndex()];
fourth.textContent = lottery_number[randomIndex()];
fifth.textContent = lottery_number[randomIndex()];
sixth.textContent = lottery_number[randomIndex()];

getBonusNumber.textContent = lottery_number[randomIndex()];
