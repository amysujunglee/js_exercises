const btns = document.querySelectorAll('.btn');
const icecreamImgs = document.querySelectorAll('.icecreamImg');
const chocolateImgs = document.querySelectorAll('.chocolateImg');
const fruitsImgs = document.querySelectorAll('.fruitsImg');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.classList;

        if (category.contains('icecream')) {
            icecreamImgs.forEach(img => {
                img.classList.add('show');
                img.classList.remove('hide');
            });
            chocolateImgs.forEach(img => {
                img.classList.add('hide');
                img.classList.remove('show');
            });
            fruitsImgs.forEach(img => {
                img.classList.add('hide');
                img.classList.remove('show');
            });
        } else if (category.contains('chocolate')) {
            icecreamImgs.forEach(img => {
                img.classList.add('hide');
                img.classList.remove('show');
            });
            chocolateImgs.forEach(img => {
                img.classList.add('show');
                img.classList.remove('hide');
            });
            fruitsImgs.forEach(img => {
                img.classList.add('hide');
                img.classList.remove('show');
            });
        } else if (category.contains('fruits')) {
            icecreamImgs.forEach(img => {
                img.classList.add('hide');
                img.classList.remove('show');
            });
            chocolateImgs.forEach(img => {
                img.classList.add('hide');
                img.classList.remove('show');
            });
            fruitsImgs.forEach(img => {
                img.classList.add('show');
                img.classList.remove('hide');
            });
        } else {
            icecreamImgs.forEach(img => {
                img.classList.remove('hide', 'show');
            });
            chocolateImgs.forEach(img => {
                img.classList.remove('hide', 'show');
            });
            fruitsImgs.forEach(img => {
                img.classList.remove('hide', 'show');
            });
        }
    });
});