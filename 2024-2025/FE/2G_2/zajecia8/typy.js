// TYPY W JS
// Typy podstawowe
const number = 42;
const number2 = 3.14;
const string = 'Hello';
const boolean = true;
const undefinedValue = undefined;
const nullValue = null;
const bigInt = 1234567890123456789012345678901234567890n;
const symbol = Symbol('foo');

// Typy złożone
const object = { x: 0 };
const array = [1, 2, 3, '4', true, { x: 0 }, [1, 2, 3]];
//function

const x = () => console.log('Hello from function');

console.log(typeof x);

// Przeciążenia operatorów
console.log(1 + 1);
console.log('1' + '1'); // konkatenacja
console.log(1 + '1');
console.log(1 - '1');
console.log(1 * '1');

// +'1' - rzutowanie na liczbę
console.log(1 + +'1');

console.log(1 - -'1');

console.log(Number('1'));