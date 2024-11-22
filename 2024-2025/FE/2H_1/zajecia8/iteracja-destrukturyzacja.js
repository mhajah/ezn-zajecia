const x = [1, 2, 3, 4, 5];

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}

for (let i in x) {
  console.log(x[i]);
}

// Funkcja wyższego rzędu (HoF)
// to takie funkcje które przyjmują inne funkcje jako argumenty
// funkcje lub zwracaja funkcje
console.log('forEach');
x.forEach(el => console.log(el));

const y = [...x, 5, 5, 5, 5, 5, 5, 5];
console.log(y);

const [first, ...rest] = y; // destrukturyzacja
console.log(first, rest);

const person = {
  imie: 'Jan',
  nazwisko: 'Kowalski',
  wiek: 30,
};  // obiekt

const { wiek: wiekOsoby, nazwisko } = person; // destrukturyzacja
console.log(wiekOsoby, nazwisko);

person.wiek = 31;

const nowaOsoba =  { ...person, wiek: 32 }
console.log(nowaOsoba);

// Tak łatwo iterujemy się po obiektach
for (let klucz in nowaOsoba) {
  console.log(klucz, nowaOsoba[klucz]);
}

console.log(Object.values(nowaOsoba));
console.log(Object.keys(nowaOsoba));
