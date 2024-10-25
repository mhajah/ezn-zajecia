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
    <main>
      <h1>Pokemons</h1>
      <input id="pokemon" type="text" />
      <button onClick={ () => setPokemon(document.getElementById('pokemon').value) }>
        Znajdz pokemona
      </button>
      { pokemonData && (
          <>
            <img src={pokemonData.sprites.front_default} alt="pokemon" /> <br/>
            <h3>Umiejetnosci:</h3>
            {pokemonData.abilities.map(ability => (
              <li>{ability.ability.name}</li>
            ))}
         </>
        )

        
      }
    </main>
    </>
  );
}

export default App;
