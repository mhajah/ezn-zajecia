function myReducer(state, action) {
  // if (action.type === 'addTodo') {
  //   return {
  //     ...state,
  //     todos: [...state.todos, action.payload]
  //   }
  // }
  switch (action.type) {
    case 'addTodo':
      const newTask = { name: action.payload, isFavourite: false };
      return {
        ...state,
        todos: [...state.todos, newTask]
      }
    case 'increaseCounter':
      return {
        ...state,
        counter: state.counter + 1,
      }
    default:
      return state;
  }
}

export default myReducer;