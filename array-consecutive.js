function arrayConsecutive(statues) {

  var newStatus = statues;
  var newArray = newStatus.sort((a, b) => a - b);
  var result = (newArray[newArray.length - 1] - newArray[0]) + 1;

  return result - newArray.length;


}
