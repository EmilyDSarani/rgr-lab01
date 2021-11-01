const getName = require ('../lab/name');
const getArtist = require ('../lab/push');
const getCap = require ('../lab/capitalize');
const getQuotes = require('../lab/fetch');

describe('getName', () => {
  it('takes in name property of an object', async () => {
    const object = getName({ name: 'beyonce' }); 
    expect(object).toEqual('beyonce');   
  });

});

describe('getPush', () => {
  it('takes in an artist and shows a new array', async () => {
    const array = ['beyonce', 'pink']; 
  
    expect(getArtist(array, 'taylor')).toEqual(['beyonce', 'pink', 'taylor']); 
  });
    
});

describe('getCap', () => {
  it('takes in a lowercase and returns a cap', async () => {
    const noCap = ['apple', 'ball', 'cat', 'dog', 'electric', 'farmer', 'goat'];
    
  
    expect(getCap(noCap)).toEqual(['APPLE', 'BALL', 'CAT', 'DOG', 'ELECTRIC', 'GOAT']); 
  });
      
});

describe('getFetch', () => {
  it('fetch the quotes', async () => {
    const quote = await getQuotes();
    const expectation = [expect.any(String)];
    expect(quote).toEqual(expect.arrayContaining(expectation)); 
  });
  //rule of thumb, have the expect be something the function creates
  //and have the expectation be something YOU create        
});
