/*

Funkcje modyfikujace tablice:
- push(element) - dodaje element na koniec tablicy
- pop() - usuwa ostatni element z tablicy
- shift() - usuwa pierwszy element z tablicy
- unshift(element) - dodaje element na poczatek tablicy
- splice(index, zakres) - usuwa elementy z tablicy
- sort() - sortuje tablice
- reverse() - odwraca tablice
- fill(value) - wypelnia tablice wartoscia value

*/

const x = [1,2,3];
x.push(4);
console.log(x);

const mid = Math.floor(x.length / 2);
x.splice(0, mid);
console.log(x);

x.sort() // sortuje tablice
x.reverse() // odwraca tablice

x.fill(0); // wypelnia tablice wartoscia 0

const tab = new Array(10).fill(0);
