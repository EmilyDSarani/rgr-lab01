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


describe('getArtist', () => {
  it('takes in an artist and shows a new array', async () => {
    const array = ['beyonce', 'pink']; 
  
    expect(getArtist(array, 'taylor')).toEqual(['beyonce', 'pink', 'taylor']); 
  });
    
});

describe('getCap', () => {
  it('takes in a lowercase and returns a cap', async () => {
    const noCap = ['a', 'b', 'c'];
    
  
    expect(getCap(noCap)).toEqual(['A', 'B', 'C']); 
  });
      
});

describe('getFetch', () => {
  it('fetch the quotes', async () => {
    const quote = await getQuotes();
    
    expect(quote).toEqual(expect.arrayContaining(quote)); 
  });
        
});
