const quotes = [
    {
        quote: 'Great things never came from comfort zones.',
        author: 'Anonymous'
    },
    {
        quote: `It always seems impossible untile it's done`,
        author: 'Nelson Mandela'
    },
    {
        quote: `If people are doubting how far you can go, go so far that you can't hear them anytmore.`,
        author: 'Michele Ruiz'
    },
    {
        quote: 'It is never too late to be who you might have been.',
        author: 'George Elliot'
    },
    {
        quote: `If your dreams don't scare you, thry are too small.`,
        author: 'Richard Branson'
    },
    {
        quote: `Your time is limited, so don't waste it living someone else's life.`,
        author: 'Steve Jobs'
    },
    {
        quote: 'Continuous improvement is better than delayed perfection.',
        author: 'Mark Twain'
    },
    {
        quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
        author: 'Helen Keller'
    },
    {
        quote: 'Strenth and growth come only through continuous effor and struggle.',
        author: 'Nopoleon Hill'
    },
    {
        quote: `Don't tell people your dreams. Show them.`,
        author: 'Anonymous'
    },
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const getRandomQuoteBtn = document.querySelector('#get-random-quote-btn');
const copyBtn = document.querySelector('#copy-btn');

// show random quote
const showRandomQuote = () => {
    let randomIndex = 0;
    randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = `"${quotes[randomIndex].quote}"`;
    author.textContent = `- ${quotes[randomIndex].author} -`;
}

showRandomQuote();

getRandomQuoteBtn.addEventListener('click', () => {
    showRandomQuote();
});

// copy quote
copyBtn.addEventListener('click', () => {
    navigator.clipboard
        .writeText(`${quote.textContent} ${author.textContent}`)
        .then(() => {
            alert(`You copied: ${quote.textContent} ${author.textContent}`);
        })
        .catch(() => {
            alert('Please try it again.')
        });
});