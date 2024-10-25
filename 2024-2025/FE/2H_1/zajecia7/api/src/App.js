import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
  }, [pokemon])

  return (
    <main>
      <h1>Pokemons</h1>
      <input type="text" id="pokemonName" />
      <button
        onClick={() => setPokemon(document.getElementById('pokemonName').value)}
      >
        Znajdź pokemona
      </button>
      {
        pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            {pokemonData.types.map(item => (
              <li key={item.type.name}>{item.type.name}</li>
            ))}
            <audio controls autoPlay src={pokemonData.cries.latest}>
              <source src={pokemonData.cries.legacy} type="audio/mpeg" />
            </audio>
          </div>
        )
      }


    </main>
  );
}

export default App;
