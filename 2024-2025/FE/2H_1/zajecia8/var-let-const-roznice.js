// var x;

/*

  var, let i const - różnice
  var: zmienna (mutowalna), o zasiegu (scope) funkcyjnym
  let: zmienna (mutowalna), o zasiegu blokowym
  const: stała (niemutowalna), o zasięgu blokowym

  hoisting?
  - wynoszenie deklaracji zmiennych i stalych na górę pliku

*/

console.log(x);
var x = 1;

// console.log(y); // --error
// console.log(z); // --error
let y = 1;
const z = 1;

if (true) {
  var a = 1;
  let b = 1;
  const c = 1;
  console.log(a, b, c);
} // b, c zostaja usniete z pamieci na zawsze

console.log(a); // 1
// console.log(b); // --error
// console.log(c); // --error

for (let i = 0; i < 3; i++) {
  console.log(i);
}