import Delete from './Delete';

export default function Tasks({ todos, deleteTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <>
          <div style={{ backgroundColor: todo.isFavourite ? 'yellow' : '' }}>
            <li key={index}>{todo.text}</li>
            <Delete deleteTodo={deleteTodo} index={index} />
          </div>
        </>
      ))}
    </>
  )
}