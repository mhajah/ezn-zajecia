// Typy proste
const valueNumber = 42; // number
const valueNumber2 = 32.32; // number
const valueString = 'Hello World!'; // string
const valueBoolean = true; // boolean
const valueNull = null; // null 
const valueUndefined = undefined; // undefined

// Typy złożone
const valueObject = { color: 'red' }; // object
const valueFun = () => {}; // function

// Przeciążenia operatorów
console.log(1 + 1); // 2
console.log(1 + '1'); // 11
console.log(1 - '1'); // 0
console.log('Ala' + ' ' + 'ma kota'); // Ala ma kota
console.log(true + true);
console.log(typeof 42); // number
console.log(typeof '42'); // string
console.log(typeof true); // boolean
// Not a number (NaN)
const notANumber = 'test' - 'test1';
console.log(notANumber); // NaN
console.log(typeof NaN); // number
