import React from 'react';
import './App.css';

interface Postac<T extends string | number> {
  /* Imie powinno byc z wielkiej litery */
  imie: string;
  wiek: number;
  plec?: 'K' | 'M' | 'I';
  wymiary: {
    wzrost: T;
    waga: T;
  }
}

const Cyprian: Postac<number> = {
  imie: 'Cyprian',
  wiek: 30,
  wymiary: {
    wzrost: 180,
    waga: 80
  }
};

interface SuperPostac extends Postac<number> {
  supermoc: string;
}

const Mikolaja: SuperPostac = {
  imie: 'Mikolaja',
  wiek: 30,
  plec: 'M',
  wymiary: {
    wzrost: 180,
    waga: 80
  },
  supermoc: 'Latanie'
};

function KartaPostaci( { imie, wiek, plec, wymiary }: Postac<number> ) {
  return (
    <div>
      <h1>{imie}</h1>
      <p>{wiek}</p>
      <p>{plec}</p>
      <p>{wymiary.wzrost}</p>
      <p>{wymiary.waga}</p>
    </div>
  );
}

function Avg(lista_liczb: number[] = [], x?: number) {
  const len = lista_liczb.length;
  const sum = lista_liczb.reduce((a, b) => a + b, 0);

  return sum / len;
}

function App() {

  let x = 5;
  // Nie możemy zmieniać typu zmiennej
  // x = true;
  const y = '5';

  type numberString = number | string;

  const sum: numberString = x + y;
  console.log(sum);

  const avg = Avg([1, 9, 3, 4, 3]);

  return (
    <div className="App">
      <header className="App-header">
        <KartaPostaci {...Cyprian} />
        {avg}
      </header>
    </div>
  );
}

export default App;
