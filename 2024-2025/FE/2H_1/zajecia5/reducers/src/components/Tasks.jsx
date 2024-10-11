import Delete from './Delete'
import { FaStar } from "react-icons/fa";

export default function Tasks({ tasks, removeFunction }) {
  return (
    <>
      {tasks.map((task, idx) => (
        <>
          {task.isFavourite && <FaStar />}
          <li key={idx}>{task.text}</li> 
          <Delete index={idx} removeFunction={removeFunction} /> 
        </>
      ))}
    </>
  )
}