import './App.css';
import { useState } from 'react';

function App() {
  const initialList = [
    "Zrobić zakupy",
    "Umyć okna",
    "Posprzątać w szafie",
    "Obejrzeć film"
  ];

  const [todo, setTodo] = useState(initialList);
  const [search, setSearch] = useState("");
  return (
    <>
      <input 
        onChange={ 
          (event) => setSearch(event.target.value)
        }
      />
      {
        todo
        .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
        .map((item, idx) => (
          <li key={idx}>{item} ({idx})</li>
        ))
      }
      <form>
        <input />
        <button
          onClick={
            (event) => {
              event.preventDefault();
              console.log(event.target.previousElementSibling.value)
            }
          }
        
        >
          Dodaj
        </button>
      </form>
    </>
  );
}

export default App;
