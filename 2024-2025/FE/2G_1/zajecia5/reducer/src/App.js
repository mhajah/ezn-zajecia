import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react'; 
import Tasks from './components/Tasks';
import Add from './components/Add';
import myReducer from './reducers/my-reducer';

function App() {
  const initialList = [
    { task: 'Learn React', title: 'abc', isFavourite: true },
    { task: 'Learn SQL', title: 'cda', isFavourite: false }
  ]
  const [state, dispatch] = useReducer(myReducer, { todos: initialList, counter: 3 });

  function handleAddTodo (task) {
    //  TUTAJ DAJEMY AKCJE
    //       |
    //       V
    dispatch({ type: 'ADD_TODO', task })
  }

  function handleRemoveTodo (index) {
    dispatch({ type: 'REMOVE_TODO', index })
  }
  

  return (
    <div className='App'>
      <p>{state.counter}</p>
      <Tasks 
        todos={state.todos} 
        removeTodo={handleRemoveTodo}
      />
      <Add addTodos={handleAddTodo} />
    </div>
  );
}

export default App;
