import './App.css';
import TaskList from './components/TaskList';
import { useState, useReducer } from 'react';
import AddTasks from './components/AddTask';
import myReducer from './reducers/myReducer';

function App() {
  const initialList = [
    { name: 'Task 1', isFavourite: false }, 
    { name: 'Task 2', isFavourite: true }, 
    { name: 'Task 3', isFavourite: false }
  ];
  // const [tasks, setTasks] = useState([
  //   'Task 1',
  //   'Task 2',
  //   'Task 3',
  // ]);

  // function addTask(task) {
  //   setTasks([...tasks, task]);
  // }

  const [state, dispatch] = useReducer(myReducer, { todos: initialList, counter: 3 });

  function addTodo (todo) {
    //    TO JEST AKCJA (ACTION)
    //        |
    //        |
    //        V
    dispatch({ type: 'addTodo', payload: todo });
  }

  function increaseCounter() {
    dispatch({ type: 'increaseCounter' });
  }

  return (
    <>
      <TaskList tasks={state.todos} counter={state.counter} />
      <AddTasks addTask={addTodo} increaseCounter={increaseCounter} />
    </>
  );
}

export default App;
