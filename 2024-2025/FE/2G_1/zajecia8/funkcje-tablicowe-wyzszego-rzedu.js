/*

  Funkcja wyzszego rzedu - funkcja, ktora przyjmuje jako
  argument inna funkcje lub zwraca funkcje jako wynik.
  
  - map
  - filter
  - reduce
  - find
  - findIndex
  - some
  - every
  - forEach

*/

const x = [1, 2, 3];
console.log(x.map(el => el *2)); // [2, 4, 6]
console.log(x);

console.log(x.filter(el => el % 2 === 0)); // [2]

console.log(x.reduce((acc, el) => acc + el, 0)); // 6

console.log(x.find(el => el === 2)); // 2

console.log(x.findIndex(el => el === 2)); // 1

console.log(x.some(el => el === 2)); // true

console.log(x.every(el => el === 2)); // false

// console.log(1 + 1); // 2
// console.log(1 + '1'); // 11
// console.log(+'1' + 1); // 2
