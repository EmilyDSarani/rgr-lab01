const getName = () => {
  const pink = { name: 'pink', age: 42, job: 'singer' };
  const { name: nm } = pink; 
  return nm;
};

module.exports = getName;
