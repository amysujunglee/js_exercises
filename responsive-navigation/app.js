const mobileMenu = document.querySelector('.mobile-icon');
const nav = document.querySelector('nav');

console.log(nav);

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('show');
});