// Popularne funkcje tablicowe w JavaScript:
// - map
// - flatMap
// - filter
// - reduce
// - find
// - findIndex
// - some
// - every

const x = [1, 2, 3];

// Przechodzimy po każdym elemencie tablicy,
// i aplikujemy na nim funkcję
const y = x.map((el, index) => el.toString());
console.log('Wynik map:')
console.log(y);

const z = x.filter(el => el % 2 === 0);
console.log('Wynik filter:')
console.log(z);

const bardziejSkomplikowanaFunkcja = (el, index) => {
  if (el % 2 === 0) {
    return el;
  } else {
    return el * 2;
  }
}
const w = x.map(bardziejSkomplikowanaFunkcja);
console.log('Wynik map z bardziej skomplikowaną funkcją:')
console.log(w);

const wynikReduce = x.reduce((acc, el) => acc + el, '');
console.log('Wynik reduce:')
console.log(wynikReduce);

//jesli znajdzie element, to go zwraca
const wynikFind = x.find(el => el === 2);
console.log('Wynik find:')
console.log(wynikFind);

const wynikFindIndex = x.findIndex(el => el === 2);
console.log('Wynik findIndex:')
console.log(wynikFindIndex);

// zwraca true/false
const wynikSome = x.some(el => el === 2);
console.log('Wynik some:')
console.log(wynikSome);

// zwraca true/false
const wynikEvery = x.every(el => typeof el === 'number');
console.log('Wynik every:')
console.log(wynikEvery);

// FlatMap
const unflatten = [1, [2, 3], [4, [5, 6]]];
const flatten = unflatten.flatMap(el => el)
                         .flatMap(el => el)
                         .filter(el => el % 2 === 0);
console.log('Wynik flatMap:')
console.log(flatten);
