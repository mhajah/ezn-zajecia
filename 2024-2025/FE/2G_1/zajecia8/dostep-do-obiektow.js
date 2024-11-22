// Dostep do obiektow mozemy uzyskac przez kropke lub nawiasy
// np. person.firstName lub person['firstName']
// ten drugi jest czesciej stosowany, gdy klucz jest zmienna/jest dynamiczny

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const key = 'firstName';

console.log(person.firstName);

const przepis = { ID: 1, text: 'przepis', tytul: '1123'};
console.log(przepis['ID']);