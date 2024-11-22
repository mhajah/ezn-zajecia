// Funkcje modyfikujące tablice
// - push - dodaje element na końcu tablicy
// - pop - usuwa element z końca tablicy
// - shift - to samo co push, tylko na początku
// - unshift - to samo co pop, tylko na początku
// - splice - usuwa elementy z tablicy
// - sort - sortuje tablicę
// - reverse
// - fill

const x = [1, 2, 3];
// to nie modyfikuje tablicy x
// x.map(el => el * 2);
x.push(4);
console.log(x); // [1, 2, 3, 4]

x.pop();
console.log(x); // [1, 2, 3]

x.reverse();
console.log(x); // [3, 2, 1]

x.sort();
console.log(x); // [1, 2, 3]

// x.fill('a');
// console.log(x); // [0, 0, 0]

// new Array(20).fill(0);

x.splice(1, 1);
console.log(x); // [1, 3]
