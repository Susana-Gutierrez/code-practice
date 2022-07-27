function checkPalindrome (inputString) {

  var newArray = inputString.split('');
  var newString = [];

  for (let i = newArray.length - 1; i >= 0; i--) {
    newString.push(newArray[i]);
  }

  if (inputString === newString.join('')) {
    return true;
  } else {
    return false;
  }

}
