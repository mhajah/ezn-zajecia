import React from 'react';
import './App.css';

interface Postac {
  imie: string;
  wiek: number;
  wzrost: number;
  samochod?: boolean;
  kolorSamochodu?: string;
}

interface MagicznaPostac extends Postac {
  czar: string;
  umiejetnosci: string[];
}



interface Wymiary<T> {
  wysokosc: T;
  szerokosc: T;
  rozmiar: T;
}

// const Mikolaj: Postac = {
//   imie: 'Mikolaj',
//   wiek: 30,
//   wzrost: 180,
//   samochod: true,
//   kolorSamochodu: 'zielony'
// }

function KartaPostaci({ imie, wiek, wzrost, kolorSamochodu }: Postac ) {
  return (
    <div>
      <h1>{imie}</h1>
      <p>{wiek}</p>
      <p>{wzrost}</p>
    </div>
  );
}

function Avg(lista_liczb: number[]) {
  const len = lista_liczb.length;
  const sum = lista_liczb.reduce((a, b) => a + b, 0);

  return String(sum / len);
}

function App() {

  const [imie, setImie] = React.useState('');

  let x = '5';
  let y = 5;

  // type numberString = number | string;
  const sum: number | string = x + y;
  console.log(sum);

  const srednia = Avg([1, 9, 3, 4, 2]);

  return (
    <div className="App">
      <header className="App-header">
      <input onChange={(e) => setImie(e.target.value)}/>
      <KartaPostaci 
        imie={imie}
        wiek={30}
        wzrost={30}
      />
      {srednia}
      </header>
    </div>
  );
}

export default App;
