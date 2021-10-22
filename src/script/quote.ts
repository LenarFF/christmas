const json = require('../data/quotes.json');

const quote = document.querySelector('.quote') as HTMLElement;
const author = document.querySelector('.author') as HTMLElement;
const buttonChange = document.querySelector('.change-quote') as HTMLElement;
let quoteIndex = 0;

const getRndQuoteIndex = () => {
  const newQuoteIndex =  Math.floor(Math.random() * (json.length + 1));
  quoteIndex === newQuoteIndex ? getRndQuoteIndex() : quoteIndex = newQuoteIndex
}

export const getQuotes = () => {
  getRndQuoteIndex()
  quote.innerText = json[quoteIndex].text;
  author.innerText = json[quoteIndex].author
}

export const changeQuote = () => {
  buttonChange.addEventListener('click', getQuotes);
}
