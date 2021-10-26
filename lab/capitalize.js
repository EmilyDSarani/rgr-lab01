const getCap = (arr) => {
  
  //return noCap.toUpperCase();
  
  //I want... it to go from lower case to upper case. 
  //ideally, the function will need a loop 
  const newArr = [];
  for (const item of arr){
    const upperCase = item.toUpperCase();
    newArr.push(upperCase);
  }
  return newArr;
  //then an array method
 
};
  
module.exports = getCap;

