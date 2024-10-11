export default function Delete({ removeTodo, index }) {
  return (
    <button onClick={() => removeTodo(index)}>Delete</button>
  )
}