const banners = [
    { id: 1, img: './img/banner_1.jpg' },
    { id: 2, img: './img/banner_2.jpg' },
    { id: 3, img: './img/banner_3.jpg' },
    { id: 4, img: './img/banner_4.jpg' }
];

// set initial number
let bannerNumber = 0;

const bannerImg = document.querySelector('#banner-img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

window.addEventListener('load', () => {
    addImg();

});

prevBtn.addEventListener('click', () => {
    bannerNumber--;
    if (bannerNumber < 0) {
        bannerNumber = banners.length - 1;
    }
    addImg();
});

nextBtn.addEventListener('click', () => {
    bannerNumber++;
    if (bannerNumber > banners.length - 1) {
        bannerNumber = 0;
    }
    addImg();
});

function addImg() {
    let banner = banners[bannerNumber];
    bannerImg.src = banner.img;
};