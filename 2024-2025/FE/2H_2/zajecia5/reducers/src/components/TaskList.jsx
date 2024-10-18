export default function TaskList({ tasks, counter }) {
  return (
    <>
      Liczba tasków: {counter}
      {
        tasks.map(task => (
          <li style={ task.isFavourite ? {color: 'red'} : {color: 'blue'}}>
            {task.name}
          </li>
          // Tutaj jakiś, po kliknieciu ktorego task.isFavourite zmienia sie na true/false
        )) 

      }
    </>
  )
}