import './App.css';
import { useState, useReducer } from 'react';
import Tasks from './components/Tasks'
import Add from './components/Add'
import myReducer from './reducers/todoReducer'

function App() {
  const initialList = [
    { text: 'Zrobić zakupy', isFavourite: false, title: 'text' },
    { text: 'Zrobić pranie', isFavourite: true },
    { text: 'Zrobić obiad', isFavourite: false }
  ];
  // const [todos, setTodos] = useState(initialList);
  const [state, dispatch] = useReducer(myReducer, { todos: initialList, licznik: 0, x: 1, y: 2 });
  function handleAddTodo (text) {
    //  TO JEST AKCJA
    //        |
    //        v
    dispatch({ type: 'ADD_TODO', text });
  }

  function handleDeleteTodo (index) {
    dispatch({ type: 'DELETE_TODO', index });
  }

  // function handleDeleteTodo (index) {
  //   dispatch({ type: 'DELETE_TODO', index });
  // }

  function incrementCounter () {
    dispatch({ type: 'INCREMENT' });
  }

  function decrementCounter () { 
    dispatch({ type: 'DECREMENT' });
  }

  function handleFavourite (index) {
    dispatch({ type: 'FAVOURITE_TODO', index });
  }

  // const addTodo = (text) => {
  //   setTodos([...todos, text]);
  // }

  // const deleteTodo = (index) => {
  //   const newTodos = todos.filter((todo, i) => i !== index);
  //   setTodos(newTodos);
  // }

  return (
    <div className='App'>
      <div>{state.licznik}</div>
      <button onClick={incrementCounter}>+1</button>
      <button onClick={decrementCounter}>-1</button>
      <Tasks todos={state.todos} deleteTodo={handleDeleteTodo} />
      <Add addTodo={handleAddTodo} />
    </div>
  );
}

export default App;
