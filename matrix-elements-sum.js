
function matrixElementsSum(matrix) {

  var i = 0;
  var result = 0;
  var isHaunted = false;

  while ( i < matrix.length ) {

    for (let j = 0; j < matrix[i].length; j++) {

      if (i === 0 ) {
        result += matrix[i][j];
      } else {
        for (let h = i; h >= 0; h--) {
          if (matrix[h][j] === 0) {
            isHaunted = true;
            break;
          }
        }
        if (isHaunted !== true) {
          result = result + matrix[i][j];
        } else {
          isHaunted = false;
        }
      }
    }

    i += 1;
  }

  return result;

}
