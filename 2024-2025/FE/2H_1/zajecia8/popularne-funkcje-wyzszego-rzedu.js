/*
  Popularne funkcje wyższego rzędu w JS na tablicach
  zadna z tych funkcji nie modyfikuje tablicy w miejscu
  (czyli nie zmienia tej na ktorej dzialamy)
  - map
  - filter
  - reduce
  - find
  - findIndex
  - some
  - every
  - forEach
  - flatMap
*/

// MAP
const x = [1, 2, 3, 4, 5];
const y = x.map(el => {
  if (el % 2 === 0) {
    return 'tu kiedys byla parzysta';
  } else {
    return 'tu kiedys byla nieparzysta';
  }
});
console.log(y);

// FILTER
function czyParzysta(liczbe) {
  return (liczbe % 2 === 0);
}

const z = x.filter(czyParzysta);
console.log(z);

// REDUCE
const w = x.reduce((akumulator, el) => akumulator += el, 0);
// zbiera wszystkie elementy w jeden wedlug funkcji do akumulatora
// w tym przypadku sumuje
console.log(w);

// FIND
const v = x.find(el => el === 3); 
// zwraca pierwszy element, który spełnia warunek

// FINDINDEX
const u = x.findIndex(el => el === 3);
// zwraca indeks pierwszego elementu, który spełnia warunek

// SOME
const t = x.some(el => el === 3);
// zwraca true/false
// jesli jakikolwiek element z tablicy spelnia warunek

// EVERY
const s = x.every(el => el < 10);
// zwraca true/false
// jesli wszystkie elementy spelniaja warunek

// FLATMAP
const unflattenTab = [[1, 2], [3, 4], [5, 6]];

const g = unflattenTab.flatMap(el => el).map(el => el * 2);
console.log(  g  );