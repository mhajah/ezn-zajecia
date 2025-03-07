import { useRef, useState } from 'react'
import './App.css'

const exampleTodos = [
  'Learn React',
  'Learn TypeScript',
  'Learn TailwindCSS',
  'Learn Vite',
  'Learn React Query',
  'Learn React Router',
  'Learn React Testing Library',
  'Learn Jest',
  'Learn Node.js',
  'Learn Express.js',
  'Learn MongoDB',
  'Learn Firebase',
  'Learn GraphQL',
  'Learn Apollo Client',
  'Learn Recoil',
  'Learn Zustand',
  'Learn XState',
  'Learn Webpack',
  'Learn Rollup',
]

function TodoList() {
  const [todos, setTodos] = useState(exampleTodos);
  const [value, setValue] = useState('');
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleAddTodo = (value: string) => {
    setTodos([...todos, value]);
    setValue('');
    const lastChildOfUl = listRef.current?.lastChild;
    if (lastChildOfUl instanceof HTMLElement) 
      lastChildOfUl.scrollIntoView({ behavior: 'smooth' });
  } 

  return (
    <div>
      <input type='text' className='border-1' 
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => handleAddTodo(value)}
      >
        Add
      </button>
      <ul ref={listRef}>
        { todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (!isPlaying) videoRef.current?.play();
    else videoRef.current?.pause();
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
  // { current: 0 }
  const simpleRef = useRef(0);
  const renderCounts = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(0);

  renderCounts.current = renderCounts.current + 1;
  console.log('renderCounts', renderCounts.current);

  return (
    <div className='flex flex-col gap-1'>
      <button onClick={() => {
        setValue(value + 1);
      }}>
        {value}
      </button>

      {/* <button onClick={
        () => inputRef.current?.focus()
      }>
        Focus
      </button> */}

      {/* <input type='text' className='border-1' ref={inputRef}/> */}

      <TodoList/>

      <VideoPlayer/>
    </div>
  )
}

export default App
