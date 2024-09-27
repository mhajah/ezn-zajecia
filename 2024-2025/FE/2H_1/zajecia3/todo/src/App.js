import './App.css';
import { useState } from 'react'

// Todolista z możliwaściami:
// - dodawania zadania do zrobienia
// - usuwania zadania do zrobienia
// - wyszukiwania zadań

function App() {
  const initialList = [
    "Wynieść śmieci",
    "Zrobić projekt",
    "Nauczyć się programowania dynamicznego"
  ]
  const [todo, setTodo] = useState(initialList);
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        onChange={(event) => {
            const value = event.target.value;
            setSearch(value);
          }
        }
      />
      <ul>
      { todo
      .filter((element) => element.toLowerCase().includes(search.toLowerCase()))
      .map((element) => (
        <li>{element}</li>
      ))
      }
      </ul>
      <form>
        <input></input>
        <button 
          type="submit"
          onClick={e => {
            e.preventDefault();
            // tak się dodaje:
            //setTodo([...todo, element])
            console.log(e.target.previousElementSibling.value);
          }}
        >
        dodaj todo
        </button>
      </form>
    </>
  );
}

export default App;
