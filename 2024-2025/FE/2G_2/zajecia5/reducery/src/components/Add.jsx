export default function Add({ addTodo }) {
  return (
    <>
      <input type='text' placeholder='Add a task' />
      <button onClick={(e) => addTodo(e.target.previousSibling.value)}>Dodaj</button>
    </>
  );
}