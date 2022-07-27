
function adjacentElements(inputArray) {

  var result;

  inputArray.forEach( (num, index) => {

    let operand1 = num * inputArray[index + 1];

    if (index + 1 !== undefined) {
      if ((operand1 > result ) || (result === undefined)) {
        result = operand1;
      }
    }

  });

  return result;

}
