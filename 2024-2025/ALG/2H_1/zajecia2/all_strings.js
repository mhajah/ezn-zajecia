// n - dlugosc naszego napisu
// s - na poczatku pusty string, do ktorego bedziemy dokladac 0 lub 1
function allBinaryStrings(n, s) {
  if (n == 0) {
    console.log(s);
  } 
  else {
    allBinaryStrings(n-1, s + '0');
    allBinaryStrings(n-1, s + '1');
  }
}
// allBinaryStrings(32, '');

function allSubsets(X, N, s, sum) {
  if (sum === N) {
    console.log(s.split(''));
    return;
  }
  if (X.length === 0) {
    return;
  }
  allSubsets(X.slice(1), N, s + X[0], sum + X[0]);
  allSubsets(X.slice(1), N, s, sum);
}

// allSubsets([1, 2, 3, 4, 5], 5, '', 0);
