/*

Jaka jest różnica między var, let i const?
const - stała, niemutowalna (referencja)
var, let - zmienne, mutowalne, można nadpisywać

Hoisting - co to jest?

Scope (zasięg) - co to jest?
let i const mają zasięg blokowy
var ma zasięg funkcyjny

*/
// var a; // <- hoisting
console.log(a);
var a = 1;
// console.log(b); // error
let b = 1;
const c = 1; 

if (true) {
  var d = 1; // zasieg funkcyjny
  let e = 2; // zasieg blokowy
  const f = 3; // zasieg blokowy
  console.log(d); // 1
  console.log(e); // 2
  console.log(f); // 3
}
console.log(d); // 1
// console.log(e); // error
// console.log(f); // error



