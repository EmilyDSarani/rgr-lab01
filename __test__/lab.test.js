const getName = require ('../lab/name');
const getArtist = require ('../lab/push');

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

    expect(newArr).toEqual(['beyonce', 'pink', 'taylor']); 
  });
    
});

