/*
const - stala przez referencje
      nie przez wartość
*/
const x = [1, 2, 3];
x.push(4);
console.log(x);

const tab1 = [1, 2, 3];
const tab2 = tab1;
tab1.push(5);
console.log(tab2); // [1, 2, 3, 5]

const w = 1;
const q = '1';
// == sprawdza tylko wartość
// === sprawdza wartość i typ danych
console.log(q === w);

