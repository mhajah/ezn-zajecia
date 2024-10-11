import Delete from './Delete';

export default function Tasks({ todos, removeTodo }) {
  return (
    <>
      {
        todos.map((todo, index) => (
          <>
            <div key={index} style={{ backgroundColor: todo.isFavourite ? 'yellow' : 'black' }}>
              {todo.task} {todo.title}
            </div>
            {/* <RecipeCard title={x} text={y} /> */}
            <Delete removeTodo={removeTodo} index={index} />
          </>
        ))
      }
    </>
  )
}