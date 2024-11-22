/*
  const - stala, ale przez referencje
*/

// to jest stała przez wskaźnik na miejsce w pamięci,
// a nie stała na wartość.
const x = [1, 2, 3];

// x.push(4) odnosi się do tej samej komórki pamięci,
// więc nie ma problemu z mutowaniem stałej
x.push(4);

// x = [1, 2, 3, 4]; // -- error
console.log(x)

const y = [1, 2, 3];
const z = y;

console.log(y === z);

const a = [1,2,3];
const b = [1,2,3];

const w = '1';
const q = 1;

console.log(w == q);