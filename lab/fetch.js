const fetch = require('cross-fetch');

const getQuotes = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/characters/fry/1');
  const body = await res.json();

  return body.map((quote) => quote.quote);
};
  
module.exports = getQuotes;
