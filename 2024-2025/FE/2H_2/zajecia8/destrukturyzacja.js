// Destrukturyzacja w JS
let [a, b] = [1, 2];
[a, b] = [b, a];

const x = [1, 2, 3, 4, 5];
const y = [...x, 6, 7, 8, 9, 10];
console.log(y);
const [first, second, ...rest] = x;
console.log('first:', first);
console.log('rest:', rest);

const person = {
  name: 'John',
  age: 30,
  country: 'USA',
};

const { age } = person;
console.log('Age: ', age);

const newPerson = { ...person, age: 31 };
console.log('newPerson: ', newPerson);

console.log('Object.keys(person): ', Object.keys(person));
console.log('Object.values(person): ', Object.values(person));

for (const key in person) {
  console.log(key, person[key]);
}



