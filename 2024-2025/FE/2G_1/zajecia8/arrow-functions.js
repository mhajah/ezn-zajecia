/*

Funkcje strzałkowe w JS
- składnia
- this

*/

const add = (a, b) => a + b;
const add2 = (a, b) => {
  console.log(this);
  return a + b;
}
add2(1,2);
const double = a => a * 2;
const triple = () => console.log('triple'); 

function add3(a, b) {
  return a + b;
}
add3(1,2);