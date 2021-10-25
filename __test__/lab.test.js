const getName = require ('../lab/name');

describe('getName', () => {
  it('takes in name property of an object', async () => {
    const object = { name : Pink }; 
    expect(getName(object).toEqual('Pink'));   
  });

});
