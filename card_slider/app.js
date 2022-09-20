const persons = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: './img/person_1.jpg',
        intro: `Hi, I'm a web developer!`
    },
    {
        id: 2,
        name: 'peter jones',
        job: 'web designer',
        img: './img/person_2.jpg',
        intro: `Hi, I'm a web designer!`
    },
    {
        id: 3,
        name: 'anna johnson',
        job: 'intern',
        img: './img/person_3.jpg',
        intro: `Hi, I'm an intern!`
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'ceo',
        img: './img/person_4.jpg',
        intro: `Hi, I'm a CEO!`
    }
];

const img = document.querySelector('#person-img');
const name = document.querySelector('#name');
const job = document.querySelector('#job');
const intro = document.querySelector('#intro');

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const surpriseBtn = document.querySelector('#surprise-btn');

// set initial number
let currentItem = 0;

window.addEventListener('load', () => {
    const person = persons[currentItem];
    img.src = person.img;
    name.textContent = person.name;
    job.textContent = person.job;
    intro.textContent = person.intro;
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = persons.length - 1;
    }
    addText();
});

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > persons.length - 1) {
        currentItem = 0;
    }
    addText();
});

function addText() {
    const person = persons[currentItem];
    img.src = person.img;
    name.textContent = person.name;
    job.textContent = person.job;
    intro.textContent = person.intro;
}