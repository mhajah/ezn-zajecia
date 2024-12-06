import React from 'react';
import './App.css';

interface Postac {
  imie: string;
  wiek: number;
  czyMozeProwadzicSamochod: (wiek: number) => boolean;
}
 
interface Mikolaj<T> extends Postac {
  iloscPrezentow: number | string | string[];
  renifery: string[];
  kolor_ubrania?: T;
  kolor_wozu?: T;
}

const SwietyMikolaj: Mikolaj<string> = {
  imie: 'Mikolaj',
  wiek: 123,
  czyMozeProwadzicSamochod: wiek => wiek >= 18,
  iloscPrezentow: 123,
  renifery: ['Rudolf', 'Dancer']
}

function KartaPostaci( { imie, wiek, czyMozeProwadzicSamochod, iloscPrezentow, renifery }: Mikolaj<string> ) {
  return (
    <div>
      {imie} ma {wiek} lat.
      {czyMozeProwadzicSamochod(wiek) ? 'Moze' : 'Nie moze'} prowadzic samochodu.
      {imie} ma {iloscPrezentow} prezentow.
      Renifery: {renifery.join(', ')}
    </div>
  );
}


          // typy argumentow      // typ zwracany
function Add(a: number, b: number = 123) {
  return a + b;
}

function App() {
  const a = 1;
  const b = '2';

  // Add(a, 3);

  // error:
  // const liczba: number = a + b;

  // error:
  // const x = Add(a, b);

  // jakie mamy typy?
  /*
    - number
    - string
    - boolean
    - object
    - array
    - tuple [123, 123]
    - enum
    - any
    - void
    - null
    - undefined
    - never
    - unknown
    - bigint
  */

  

  return (
    <div className="App">
      <header className="App-header">
        <KartaPostaci
          imie="Ivan"
          wiek={17}
          czyMozeProwadzicSamochod={wiek => wiek >= 18}
          iloscPrezentow={123}
          renifery={['Rudolf', 'Dancer']}
        />


      </header>
    </div>
  );
}

export default App;
