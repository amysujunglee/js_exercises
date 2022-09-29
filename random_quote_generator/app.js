const quotes = [
    {
        id: 1,
        quote: 'Quote 1',
        author: 'Author 1'
    },
    {
        id: 2,
        quote: 'Quote 2',
        author: 'Author 2'
    },
    {
        id: 3,
        quote: 'Quote 3',
        author: 'Author 3'
    },
    {
        id: 4,
        quote: 'Quote 4',
        author: 'Author 4'
    },
    {
        id: 5,
        quote: 'Quote 5',
        author: 'Author 5'
    },
    {
        id: 6,
        quote: 'Quote 6',
        author: 'Author 6'
    },
    {
        id: 7,
        quote: 'Quote 7',
        author: 'Author 7'
    },
    {
        id: 8,
        quote: 'Quote 8',
        author: 'Author 8'
    },
    {
        id: 9,
        quote: 'Quote 9',
        author: 'Author 9'
    },
    {
        id: 10,
        quote: 'Quote 10',
        author: 'Author 10'
    },
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const getRandomQuoteBtn = document.querySelector('#get-random-quote-btn');
const copyBtn = document.querySelector('#copyBtn');

// get random quote
const getRandomQuote = () => {
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * quotes.length + 1);

    quote.textContent = quotes[randomNum].quote;
    author.textContent = quotes[randomNum].author;
};

getRandomQuote();

getRandomQuoteBtn.addEventListener('click', () => {
    getRandomQuote();
});
