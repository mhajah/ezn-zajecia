function allBinarySubstrings(n, s) {
  if (n == 0) {
    console.log(s);
  } else {
    allBinarySubstrings(n-1, s + '0')
    allBinarySubstrings(n-1, s + '1')
  }
}
// accumulator
allBinarySubstrings(5, '');

// Napisać rekurencyjną funkcję, która
// bierze tablicę liczb oraz liczbę N
// i zwraca wszystkie mozliwe podzbiory
// tej tablicy, sumujące się do N
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