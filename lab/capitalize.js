const getCap = (arr) => {
  
  //return noCap.toUpperCase();
  
  //I want... it to go from lower case to upper case. 
  // a loop 

  // const newArr = [];
  // for (const item of arr){
  //   const upperCase = item.toUpperCase();
  //   newArr.push(upperCase); 
    
 
  // }
  // return newArr.filter((words) => !words.startsWith('F')); 

  // an array 
  const upperCase = arr.map(arr => arr.toUpperCase());


  return upperCase.filter((words) => !words.startsWith('F'));
 
};
  
module.exports = getCap;

