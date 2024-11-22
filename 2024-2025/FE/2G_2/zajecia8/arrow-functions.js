/*
  Funkcje strzałkowe w Js
  - skladnia
  - this
*/

const add = (a, b) => a + b;
const add2 = (a, b) => {
  this.x = 1;
  this.y = 5;
  this.hello = () => console.log('hello');
  constructor();
  console.log(this);
  return a + b;
}
add2(1, 2);
const double = a => a * 2;
const triple = () => console.log('abc');

function add3(a, b) {
  // console.log(this);
  return a + b;
}
add3(1, 2);

// dodatek (offtopic):
// funkcje wyzszego rzedu
// funkcje czyste