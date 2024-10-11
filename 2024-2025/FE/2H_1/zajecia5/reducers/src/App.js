import './App.css';
import { useReducer } from 'react';
import Tasks from './components/Tasks';
import Add from './components/Add'
import todoReducer from './reducers/todoReducer';

function App() {
  const initialList = [
    { text: 'Zadanie 1', isFavourite: false },
    { text: 'Zadanie 2', isFavourite: true },
    { text: 'Zadanie 3', isFavourite: false },
  ];
  // todos -> nasza lista zadan
  // const [todos, setTodos] = useState(initialList);

  // state.todos -> nasza lista zadan
  const [state, dispatch] = useReducer(todoReducer, { todos: initialList, counter: 3 });

  function addTodoHandler(task) {
    //  TO JEST AKCJA (ACTION)
    //       |
    //       V
    dispatch({ type: 'ADD_TODO', task });
  }

  function deleteTodoHandler(index) {
    dispatch({ type: 'DELETE_TODO', index });
  }

  // function addTodo(task) {
  //   setTodos([...todos, task]);
  // }

  // function Remove(index) {
  //   const newTodos = todos.filter((todo, idx) => idx !== index);
  //   setTodos(newTodos);
  // }

  return (
    <div className="App">
      {state.counter}
      <Tasks tasks={state.todos} removeFunction={deleteTodoHandler} />
      <Add addFunction={addTodoHandler} />
    </div>
  );
}

export default App;
