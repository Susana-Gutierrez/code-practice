function isLucky (n) {

  let pivot = n.toString().length /2;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < n.toString().length; i++) {
    if (i < pivot) {
      sum1 += parseInt(n.toString()[i]);
    } else {
      sum2 += parseInt(n.toString()[i]);
    }
  }

  if (sum1 === sum2) {
    return true;
  } else {
    return false;
  }


}
