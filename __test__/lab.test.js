const getName = require ('../lab/name');
const getArtist = require ('../lab/push');
const getCap = require ('../lab/capitalize');

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

describe('getCap', () => {
  it('takes in an artist and shows a new array', async () => {
    const noCap = getCap['a', 'b', 'c'];
    const newArr = noCap.toUpperCase();
  
    expect(newArr[0]).toEqual(['A', 'B', 'C']); 
  });
      
});

