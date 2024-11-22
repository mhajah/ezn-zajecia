// Typy proste
const valueNumber = 42; // Number
const valueNumber2 = 42.42; // Number
const valueString = 'Ala'; // String
const valueBoolean = true; // Boolean
const valueNull = null; // Null
const valueUndefined = undefined; // Undefined
const valueBigInt = 424242424242424242424242424242424242424242424242n; // BigInt

// Typy złożone
const valueObject = { x: 1 }; 
const valueFunction = () => { };  

console.log(typeof valueNumber); // number
console.log(typeof valueNumber2); // number
console.log(typeof valueString); // string
console.log(typeof [1, 2, 3]); // object

console.log(valueString.toUpperCase()); // ALA
// console.log(valueNumber.toUpperCase()); // --error