const getName = require ('../lab/name');
const getArtist = require ('../lab/push');
const getCap = require ('../lab/capitalize');
const getQuotes = require('../lab/fetch');

describe('getName', () => {
  it('takes in name property of an object', async () => {
    const object = getName({ name: 'pink' }); 
    expect(object).toEqual('pink');   
  });

});


describe.skip('getArtist', () => {
  it('takes in an artist and shows a new array', async () => {
    const artists = getArtist['beyonce', 'pink']; 
    const newArr = artists.push('taylor');

    expect(newArr[0]).toEqual(['beyonce', 'pink', 'taylor']); 
  });
    
});

describe.skip('getCap', () => {
  it('takes in a lowercase and returns a cap', async () => {
    const noCap = getCap['a', 'b', 'c'];
    const newArr = noCap.toUpperCase();
  
    expect(newArr[0]).toEqual(['A', 'B', 'C']); 
  });
      
});

describe('getFetch', () => {
  it('fetch the quotes', async () => {
    const quote = await getQuotes();
    
    expect(quote).toEqual('Of all the parasites I\'ve had over the years, these worms are among the best.',); 
  });
        
});
