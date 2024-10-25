
export default function myReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = { text: action.text, isFavourite: false };
      return { ...state, todos: [...state.todos, newTodo] };
    case 'DELETE_TODO':
      const newTodos = state.todos.filter((todo, index) => index !== action.index);
      return { ...state, todos: newTodos };
    case 'INCREMENT':
      return { ...state, licznik: state.licznik + 1 };
    case 'DECREMENT':
      return { ...state, licznik: state.licznik - 1 };
    default: 
      return state;
  }
}