// set initial count
let count = 0;

const number = document.querySelector('#number');
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList;

        if (btnClass.contains('decrease')) {
            count--;
            number.style.color = 'green';
        } else if (btnClass.contains('increase')) {
            count++;
            number.style.color = 'red';
        } else {
            count = 0;
            number.style.color = '#000';
        }

        number.textContent = count;
    });
});