const btns = document.querySelectorAll('.btn');
const icecreamImgs = document.querySelectorAll('.icecreamImg');
const chocolateImgs = document.querySelectorAll('.chocolateImg');
const fruitsImgs = document.querySelectorAll('.fruitsImg');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.classList;

        if (category.contains('icecream')) {
            chocolateImgs.forEach(img => {
                img.classList.add('hide');
            });
        } else if (category.contains('fruits')) {
            fruitsImgs.forEach(img => {
                img.classList.add('hide')
            });
        }
    });
});

