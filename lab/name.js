const getName = ({ name }) => {
  return name;
};

// later in life we could do const {name, weight, age} = object, then when we grab that object by the return for each. SO when we write that test, it will read easier on what we are looking. 
// about 95% of the time, if you hear destructor-think { }
//destructoring- it doesnt matter what order age, weight, name is in for a function.

module.exports = getName;
