/*

  Bardzo często używane funkcje wyzszego rzedu w programowaniu funkcyjnym,
  które operują na tablicach.
  One nie modyfikuja tablicy, tylko tworza nowe.
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
const y = x.map(el => el * 2);
console.log(y);

const z = x.filter(el => el % 2 === 0); // [2]
console.log(z);

const reduceWynik = x.reduce((acc, el) => acc + el, 0); // 6
console.log(reduceWynik);

const findWynik = x.find(el => el === 2); // 2
console.log(findWynik);

const findIndexWynik = x.findIndex(el => el === 2); // 1
console.log(findIndexWynik);

const someWynik = x.some(el => el === 2); // true
console.log(someWynik);

const everyWynik = x.every(el => el % 2 === 0); // false
console.log(everyWynik);


