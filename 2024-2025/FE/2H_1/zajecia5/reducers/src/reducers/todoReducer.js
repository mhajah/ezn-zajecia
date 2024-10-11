function todoReducer(state, action) {
  if (action.type === 'ADD_TODO') {
    const newTask = { text: action.task, isFavourite: false };
    return {
      ...state, // destrukturyzacja obiektu/tablicy
      todos: [...state.todos, newTask],
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DELETE_TODO') {
    return {
      ...state,
      todos: state.todos.filter((_, idx) => idx !== action.index),
      counter: state.counter - 1,
    };
  }
}

export default todoReducer;