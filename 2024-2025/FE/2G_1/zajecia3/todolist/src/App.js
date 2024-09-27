import './App.css';
import { useState } from 'react';

function App() {
  const todos = [
    "Go to the market",
    "Buy food",
    "Cook dinner"
  ];

  const [todo, setTodo] = useState(todos);
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
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
      <form>
        <input />
        <button
          onClick={
            (event) => {
              event.preventDefault();
              console.log(event.target.previousElementSibling.value);
            }
          }
        >
          Add
        </button>
      </form>
    </>

  );
}

export default App;
