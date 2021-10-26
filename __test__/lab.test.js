const getName = require ('../lab/name');
const getNumbers = require ('../lab/push');

describe('getName', () => {
  it('takes in name property of an object', async () => {
    const object = getName({ name: 'pink' }); 
    expect(object).toEqual('pink');   
  });

});

describe('getNumber', () => {
  it('takes in number property of an object and shows the push', async () => {
    const number = getNumbers[1, 2, 3, 4];
    expect(number).toEqual(4);   
  });
  
});

