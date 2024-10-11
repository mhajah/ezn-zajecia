//              { type: 'ADD_TODO', task }
//                         |
//                         V   
function myReducer(state, action) {
  // console.log(state.todos)
  // if (action.type === 'ADD_TODO') {
  //   return { 
  //     ...state, 
  //     counter: state.counter + 1, 
  //     todos: [...state.todos, action.task] 
  //   }
  // }
  // if (action.type === 'REMOVE_TODO') {
  //   const newTodos = state.todos.filter((todo, i) => i !== action.index);
  //   return { 
  //     ...state, 
  //     counter: state.counter - 1, 
  //     todos: newTodos 
  //   }
  // }
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = { task: action.task, title: 'default', isFavourite: true }
      return { 
        ...state, 
        counter: state.counter + 1, 
        todos: [...state.todos, newTodo] 
      }
    case 'REMOVE_TODO':
      const newTodos = state.todos.filter((todo, i) => i !== action.index);
      return { 
        ...state, 
        counter: state.counter - 1, 
        todos: newTodos 
      }
    default:
      return state;
  }
}

export default myReducer;