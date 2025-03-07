import { use, useRef, useState } from 'react'
import './App.css'

const exampleTodoListOf20Elements = [
  'Buy milk',
  'Buy eggs',
  'Buy bread',
  'Buy butter',
  'Buy cheese',
  'Buy jam',
  'Buy honey',
  'Buy flour',
  'Buy sugar',
  'Buy salt',
  'Buy pepper',
  'Buy coffee',
  'Buy tea',
  'Buy orange juice',
  'Buy apple juice',
  'Buy banana juice',
  'Buy pineapple juice',
  'Buy mango juice',
  'Buy strawberry juice',
  'Buy raspberry juice',
];

function TodoList() {
  const [todos, setTodos] = useState<string[]>(exampleTodoListOf20Elements);
  const [addTodo, setAddTodo] = useState<string>('');

  const listRef = useRef<HTMLUListElement | null>(null);

  const handleAddTodo = (newTodo: string) => { 
    setTodos([...todos, newTodo]);
  }
  return (
    <>
    <input type="text" value={addTodo} className='border-1' onChange={ (e) => setAddTodo(e.target.value)  }/>
    <button
      onClick={(e) => {
        e.preventDefault();
        handleAddTodo(addTodo);
        const lastChildOfUl = listRef.current?.lastChild;
        if (lastChildOfUl instanceof HTMLElement) lastChildOfUl.scrollIntoView({ behavior: 'smooth' });
        setAddTodo('');
      }}
    >Dodaj TODO
    </button>
    <ul ref={listRef}>
    {
      todos.map((todo) => (
        <li>{todo}</li>
      ))
    }
    </ul>
    </>
  )
}


function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (!isPlaying) {
      // if (videoRef.current) videoRef.current.pause();
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }

  return (
    <>
      <video width="250" ref={videoRef} onClick={handleClick}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}


function App() {
  const [value, setValue] = useState<number>(0);
  const simpleRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  simpleRef.current += 1;
  console.log('render count', simpleRef.current);
  return (
    <div className='flex flex-col gap-4'>
      <button onClick={() => {
        setValue(value + 1);
      }}>
        {value}
      </button>

      <button onClick={
        () => inputRef.current?.focus()
      }>
        Focus input
      </button>

      <input type='text' className='border-2' ref={inputRef} />
      <TodoList />
      <VideoPlayer />
    </div>
  )
}

export default App
