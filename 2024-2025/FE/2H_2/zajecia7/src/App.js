import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonAbilities, setPokemonAbilities] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data)
        setPokemonAbilities(data.abilities.map(item => item.ability.name));
      });
  }, [pokemon]);

  return (
    <>
      <h1>Pokemon</h1>
      <input id="pokemon" type="text" />
      <button
        onClick={() => setPokemon(document.getElementById('pokemon').value)}
      >
        Znajdz pokemona
      </button>
      {
        pokemonData &&
        <>
          <h1>{pokemonData.name}</h1>
          <div>
            <img src={pokemonData.sprites.front_default} alt="zdjecie_pokemona" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            Waga: {pokemonData.weight}
            <br />
            Wzrost: {pokemonData.height}
          </div>
        </>
      }
      {
        pokemonAbilities &&
          pokemonAbilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))
      }
    </>
  );
}

export default App;
