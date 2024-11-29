/*

Funkcje modyfikujace tablice:
- push(element) - wstawia element na koniec tablicy
- pop(index) - usuwa element z konca tablicy
- shift(index) - usuwa element z poczatku tablicy 
- unshift(element) - wstawia element na poczatek tablicy
- splice(index, [ile do przodu, zakres]) - usuwa elementy z tablicy
- sort()
- reverse()
- fill("czym uzupelniamy")

*/ 

const x = [1,2,3];
x.push(4);
console.log(x);


// x = [1,2,3,4]
x.splice(2);
console.log(x); // [1,2,4]

x.push(3);
x.push(5);
// x = [1,2,4,3,5]
const mid = Math.floor(x.length / 2);
x.splice(0, mid);

x.sort(); // sortuje tablice
x.reverse(); // odwraca tablice


x.fill(0); // zmieni wszystkie elementy tablicy na 0
const tab = new Array(10).fill(0); // [0,0,0,0,0,0,0,0,0,0]

const y = x.map(el => el * 2);

console.log('asdad', x.unshift(10)); // 3
console.log(x);