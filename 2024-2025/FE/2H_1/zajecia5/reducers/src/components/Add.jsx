export default function Add( { addFunction } ) {
  return (
    <>
      <input type="text" />
      <button onClick={(e) => addFunction(e.target.previousSibling.value)}>Add</button>
    </>
  )
}