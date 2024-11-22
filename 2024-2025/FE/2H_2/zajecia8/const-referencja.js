/*

  const - stała referencja

*/

const x = [1, 2, 3];
// tak robić można, bo to zmiana wartości w referencji
// referencja (adres w pamięci) nie zmienia sie
x.push(4);
console.log(x); // [1, 2, 3, 4]

// Tak robić nie można, bo to zmiana referencji
// const x = [1, 2, 3, 4];

let y = [1, 2, 3];
y.push(4);
y = [1, 2, 3, 4];