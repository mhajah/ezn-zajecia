export default function Delete({ deleteTodo, index }) {
  return (
    <button onClick={() => deleteTodo(index)}>Delete</button>
  )
}