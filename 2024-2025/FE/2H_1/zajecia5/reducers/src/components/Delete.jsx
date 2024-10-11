export default function Delete( { removeFunction, index } ) {
  return (
    <button onClick={() => removeFunction(index)}>Delete</button>
  )
}