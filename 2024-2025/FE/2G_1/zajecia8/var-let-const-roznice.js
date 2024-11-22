/*

  const, var, let - różnice
  - const - stała (niemutowalny), zasięg (scope) blokowy
  - let - zmienna, zasięg (scope) blokowy
  - var - zmienna, zasięg (scope) funkcyjny

  hoisting? - wynoszenie deklaracji zmiennych na początek zakresu (scope)

*/

console.log(x); // undefined
var x = 2;

// console.log(y); // error - y is not defined
let y = 2;

if (true) {
  var a = 0;
  let b = 0;
  console.log(a); // 0
  console.log(b); // 0
} // b zostaje usunięte z pamięci

console.log(a); // 0
// console.log(b); // error - b is not defined