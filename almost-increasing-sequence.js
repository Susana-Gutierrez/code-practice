function almostIncreasingSequence(sequence) {

  var i = 0;
  var remove = 0;

  while ( i < sequence.length ) {

    var l = sequence[i -1];
    var num = sequence[i];
    var r = sequence[i+1];

    if ((l === undefined) && (num >= r)) {
      sequence.splice(i, 1);
      remove += 1;
      i -= 1;
    } else if ( (r === undefined) && (num < l)) {
      sequence.splice(i, 1);
      remove += 1;
      i -= 1;
    } else if ((num === l) || (num === r)) {
      sequence.splice(i, 1);
      remove += 1;
      i -= 1;
    } else if ((num < l) && (l < r)) {
      sequence.splice(i, 1);
      remove += 1;
      i -= 1;
    } else if ((num > r ) && ( l < r)) {
      sequence.splice(i, 1);
      remove += 1;
      i -= 1;
    } if ( num < l) {

      if (r === l ) { return false; }
      if (l > r ) { return false; }

    }

    if (remove >= 2) {
      return false;
    }

  i += 1;
  }

  return true;


}
