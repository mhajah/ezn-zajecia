import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => res.json())
        .then(data => setPokemonData(data))
  }, [pokemon]);

  return (
    <>
      <h1>Pokemon</h1>
      <input id="pokemon" type='text' />
      <button
        onClick={() => {setPokemon(document.getElementById('pokemon').value)}}
      >
        Znajdz pokemona
      </button>
      { pokemonData &&
          <>
            <img src={pokemonData.sprites.front_default} alt="pokemon" /> <br />
            Waga: {pokemonData.weight} <br />
            Wzrost: {pokemonData.height} <br />
            {pokemonData.abilities.map(items => (
              <li key={items.ability.name}>{items.ability.name}</li>
            ))}
          </>
      }
    
    </>
  );
}

export default App;
