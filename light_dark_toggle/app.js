const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const themeStyle = e.currentTarget.classList;

        if (themeStyle.contains('dark')) {
            body.style.backgroundColor = '#333'
            body.style.color = '#fff';
        } else {
            body.style.backgroundColor = '#fff';
            body.style.color = '#333';
        }
    });
});