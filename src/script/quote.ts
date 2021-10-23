import { data } from "../data/state";

const json = require('../data/quotes.json');

const quote = document.querySelector('.quote') as HTMLElement;
const author = document.querySelector('.author') as HTMLElement;
const buttonChange = document.querySelector('.change-quote') as HTMLElement;
let quoteIndex = 0;

const getRndQuoteIndex = () => {
  const newQuoteIndex =  Math.floor(Math.random() * (json.length));
  quoteIndex === newQuoteIndex ? getRndQuoteIndex() : quoteIndex = newQuoteIndex
}

export const getQuotes = () => {
  getRndQuoteIndex()
  quote.innerText = data.state.language === 'en' ? json[quoteIndex].textEN : json[quoteIndex].textRU;
  author.innerText = data.state.language === 'en' ? json[quoteIndex].authorEN : json[quoteIndex].authorRU;
}

export const changeQuote = () => {
  buttonChange.addEventListener('click', getQuotes);
}
