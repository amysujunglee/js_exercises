const btns = document.querySelectorAll('.btn');
const icecreamImgs = document.querySelectorAll('.icecreamImg');
const chocolateImgs = document.querySelectorAll('.chocolateImg');
const fruitsImgs = document.querySelectorAll('.fruitsImg');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.classList;

        if (category.contains('icecream')) {
            console.log(chocolateImgs);
            // chocolateImgs.classList.add('hidden');
            // fruitsImgs.classList.add('hidden');
        }
    });
});

