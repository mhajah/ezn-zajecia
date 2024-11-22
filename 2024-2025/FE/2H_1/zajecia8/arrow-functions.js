// Programowanie funkcyjne
// - pisanie duzej ilosci malych funkcji 
// i laczenie tych funkcji w calosc

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;
const add3 = (a, b) => {
  return a + b;
}
const hello = () => console.log('Hello World!');
const double = a => a * 2;