const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const themeStyle = e.currentTarget.classList;

        if (themeStyle.contains('dark')) {
            document.body.style.backgroundColor = '#333'
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
        }
    });
});