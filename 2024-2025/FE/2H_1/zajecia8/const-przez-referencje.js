/*



*/

const y = 5;
// y = 6; // --error

const x = [1, 2, 3];
x.push(4);
console.log(x);

const tab1 = [3, 2, 1];
const tab2 = tab1;
// const tab3 = [...tab1]; // spread operator
tab1.push(10);
console.log(tab2);
console.log(tab3);

