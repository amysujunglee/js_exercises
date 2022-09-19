const btns = document.querySelectorAll('.btn');
const icecreamImgs = document.querySelectorAll('.icecreamImg');
const chocolateImgs = document.querySelectorAll('.chocolateImg');
const fruitsImgs = document.querySelectorAll('.fruitsImg');
const allImgs = document.querySelectorAll('img');

console.log(allImgs);

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.classList;

        if (category.contains('icecream')) {
            if (allImgs.forEach(img => {
                if (!img.classList.contains('icecreamImg')) {
                    img.classList.add('hide');
                    img.classList.remove('show');
                } else if (img.classList.contains('icecreamImg')) {
                    img.classList.add('show');
                    img.classList.remove('hide');
                }
            }));
        } else if (category.contains('chocolate')) {
            if (allImgs.forEach(img => {
                if (!img.classList.contains('chocolateImg')) {
                    img.classList.add('hide');
                    img.classList.remove('show');
                } else {
                    img.classList.add('show');
                    img.classList.remove('hide');
                }
            }));
        } else if (category.contains('fruits')) {
            if (allImgs.forEach(img => {
                if (!img.classList.contains('fruitsImg')) {
                    img.classList.add('hide');
                    img.classList.remove('show');
                } else {
                    img.classList.add('show');
                    img.classList.remove('hide');
                }
            }));
        } else {
            if (allImgs.forEach(img => {
                img.classList.add('show');
                img.classList.remove('hide');
            }));
        }
    });
});