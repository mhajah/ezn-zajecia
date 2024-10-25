import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(resp => resp.json())
      .then(data => setPokemonData(data))
  }, [pokemon]);

  return (
    <>
      <h1>Pokemon</h1>
      <input id="pokemon" type="text" />
      <button onClick={ () => setPokemon(document.getElementById('pokemon').value) }>
        Znajdz pokemona
      </button>
      { pokemonData && (
          <>
            <img src={pokemonData.sprites.front_default} alt="pokemon" /> <br/>
            Waga: {pokemonData.weight} <br/>
            Wzrost: {pokemonData.height} <br/>
            Abilities: <br/>
            {pokemonData.abilities.map(item => (
              <li key={item.ability.name}>{item.ability.name}</li>
            ))}
            <audio controls src={pokemonData.cries.latest}>
              <source src={pokemonData.cries.latest} type="audio/mpeg" />
            </audio>
          </>
        )
        
      }
    
    </>
  );
}

export default App;
