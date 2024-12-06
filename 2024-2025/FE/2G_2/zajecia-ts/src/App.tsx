import React from 'react';
import './App.css';

interface WymiaryPostaci<T extends MyType> {
  wzrost: T;
  waga: T;
  rozmiarButa: T;
}

interface Postac {
  imie: string;
  wymiary: WymiaryPostaci<number>;
  czyMaSamochod: boolean;
  kolorSamochodu?: string;
  czyMozeProwadzicSamochod: (wiek: number) => boolean;
}

interface SwietyMikolaja extends Postac {
  renifery: string[];
}

const Cyprian: Postac = {
  imie: "Cyprian",
  wzrost: 180,
  waga: 80,
  wiek: 30,
  czyMaSamochod: true,
  czyMozeProwadzicSamochod: (wiek: number) => wiek >= 16
}

const Mikolaj: SwietyMikolaja = {
  imie: "Mikolaj",
  wzrost: 180,
  waga: 80,
  wiek: 30,
  czyMaSamochod: true,
  czyMozeProwadzicSamochod: (wiek: number) => wiek >= 18,
  renifery: ["Renifer1", "Renifer2"]
}

function KartaPostaci({ 
  imie, wiek, wzrost, waga,
  czyMaSamochod, czyMozeProwadzicSamochod
}: Postac) {
  return (
    <div>
      <h2>{imie}</h2>
      <p>Wiek: {wiek}</p>
      <p>Wzrost: {wzrost}</p>
      <p>Waga: {waga}</p>
      <p>Ma samochód: {czyMaSamochod ? "Tak" : "Nie"}</p>
      <p>Może prowadzić samochód: {czyMozeProwadzicSamochod(wiek) ? "Tak" : "Nie"}</p>
    </div>
  );
}

interface ITable {
  value: number | string;
  width: number;
  height: number;
}

type MyType = number | string;


function Table( { value, width, height }: ITable ) {
  return (
    <table>
      <thead>
        <tr>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
}
  



function Add(a: number = 123, b?: number) {
  if (b === undefined) {
    return a;
  }
  return a + b;
}

function App() {

  let x: number = 5;
  const y: string = "5";

  // tak nie robimy, konwersja string na number
  // x = "5";

  // error
  // const sum: number = x + y;
  const sum = x + parseInt(y);
  console.log(sum);

  // tez TS pilnuje
  // const result = Add(x, y);

  const tablica = new Array<boolean>();

  return (
    <div className="App">
      <header className="App-header">
        <KartaPostaci
          imie='Cyprian'
          wiek={30}
          wzrost={180}
          waga={80}
          czyMaSamochod={true}
          czyMozeProwadzicSamochod={Cyprian.czyMozeProwadzicSamochod}
        />

        <Table 

        />

      </header>
    </div>
  );
}

export default App;
