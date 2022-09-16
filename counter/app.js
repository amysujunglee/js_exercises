// set initial count
let count = 0;

const number = document.querySelector('#number');
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList;

        if (btnClass.contains('decrease')) {
            count--;
        } else if (btnClass.contains('reset')) {
            count = 0;
        } else if (btnClass.contains('increase')) {
            count++;
        }

        if (count > 0) {
            number.style.color = 'green';
        } else if (count < 0) {
            number.style.color = 'red';
        } else {
            number.style.color = '#000'
        }
        number.textContent = count;
    });
});