const form = document.querySelector('form');
const bill = document.querySelector('.bill');
const tip = document.querySelector('.tip');
const totalTipInput = document.querySelector('.total-tip');
const totalInput = document.querySelector('.total');

form.addEventListener('submit', calculate);

function calculate(e) {
    const total = bill.value * (tip.value / 100 + 1);
    total = totalInput.value;


    console.log(total);

    e.preventDefault();
}
