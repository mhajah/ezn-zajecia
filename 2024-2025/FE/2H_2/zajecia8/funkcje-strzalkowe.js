/*
  Funkcje strzałkowe
  - krótsza składnia przydatna przy programowaniu
  funkcyjnym, gdzie wywolujemy bardzo duzo prostych funkcji
  - this nie jest przypisane do funkcji, tylko do kontekstu
*/

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

const add3 = (a, b) => {
  return a + b;
}

const voidFunction = x => console.log(x);

const testFunction = () => {
  this.a = 1;
  this.test = () => console.log(this);
  console.log(this);
}
testFunction();

function testFunction2 () {
  console.log(this);
}
testFunction2();