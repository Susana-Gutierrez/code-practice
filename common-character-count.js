function commonCharacterCount(s1, s2) {

  var newArray = [];
  var count = 0;
  var stringCounter = 0;

  if (s1.length <= s2.length) {
    stringCounter = s1;
    newArray = s2.split('');
  } else {
    stringCounter = s2;
    newArray = s1.split('');
  }

  console.log ('newArray: ', newArray);

  for (let i = 0; i < stringCounter.length; i++ ) {

    console.log(newArray);

    console.log(newArray.includes(stringCounter[i]));

    if (newArray.includes(stringCounter[i])) {
      count += 1;
      for (let j = 0; j < newArray.length; j++) {
        if (stringCounter[i] === newArray[j]) {
          newArray.splice(j, 1);
          break;
        }
      }
    }

  }

  return count;



}
