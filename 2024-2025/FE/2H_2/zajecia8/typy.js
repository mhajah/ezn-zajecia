// Typowanie dynamiczne w JavaScript
const x = 1;
const y = 1.1; // number
const name = 'John'; // string
const isTrue = true; // boolean
const a = null; // null
const b = undefined; // undefined

// big int
const bigInt = 1234567890123456789012345678901234567890n;

let c = 1;
c = 'JEDEN';

console.log(name.length); // 4
console.log(name.toUpperCase()); // JOHN
console.log(name.toLowerCase()); // john
// console.log(x.toUpperCase());

const liczba = 5;
const napis = '5';
// konkatenacja, czyli łączenie stringów
const dodaj = liczba + napis;

const napis2 = 'Ala' + ' ma kota';
console.log(dodaj); // 55


const ashdfuahsufsjduif = 123;
const fsdofgdisjgd = '123';

console.log(ashdfuahsufsjduif + fsdofgdisjgd); // 246

// szybkie castowanie na liczbe
console.log(+'123' + 123);

// w wiekszosci jezykow programowania cos takiego nie dziala
const tablica = [1, '2', 3, true];
// w JS nie ma problemu