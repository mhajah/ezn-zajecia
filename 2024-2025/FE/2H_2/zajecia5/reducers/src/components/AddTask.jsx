export default function AddTasks( { addTask, increaseCounter } ) {
  return (
    <form>
      <input type="text" />
      <button onClick={(e) => {
        e.preventDefault();
        addTask(e.target.previousSibling.value)
        increaseCounter();
      }}>
        Add Task
      </button>
    </form>
  )
}