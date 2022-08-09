function allLongestStrings (inputArray) {

  let newArray = [];
  let biggerNumber = 0;


  inputArray.forEach( input => {

    if (input.length === biggerNumber) {
      newArray.push(input);
    } else if (input.length > biggerNumber) {
      newArray = [];
      newArray.push(input);
      biggerNumber = input.length;
    }

  })


  return newArray;



}
