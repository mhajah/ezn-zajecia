/*
  Różnice między var, let i const
  - var: mutowalna, zasieg (scope) funkcyjny
  - let: mutowalna, zasieg (scope) blokowy
  - const: niemutowalna, stała przez referencja

  Hoisting - wynoszenie deklaracji zmiennych do góry
*/

console.log(x); // -- wszystko ok (undefined)
var x = 0;

// console.log(y); -- error
let y = 1;

// Zasięg leta i vara
if (true) {
  var a = 0;
  let b = 1;
  console.log(a); // -- wszystko ok
  console.log('B:', b); // -- wszystko ok
} // tutaj zapominamy o letach i constach

console.log('var poza blokiem', a); // -- wszystko ok
// console.log('let poza blokiem', b); // -- error

// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }
