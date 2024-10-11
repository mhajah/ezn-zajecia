export default function Add({ addTodos }) {
  return (
    <>
      <input type="text" />
      <button onClick={(event) => addTodos(event.target.previousSibling.value)}>Add</button>
    </>
  )
}