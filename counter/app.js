// set initial count
let count = 0;

const number = document.querySelector('#number');
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList;

        if (btnClass.contains('decrease')) {
            count--;
            number.textContent = count;
        } else if (btnClass.contains('reset')) {
            count = 0;
            number.textContent = count;
        } else if (btnClass.contains('increase')) {
            count++;
            number.textContent = count;
        }
    });
});