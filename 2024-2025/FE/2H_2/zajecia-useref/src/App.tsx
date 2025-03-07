import { useRef, useState } from 'react'
import './App.css'

const exampleTodos = [
  'Learn React',
  'Learn TypeScript',
  'Build a React App',
  'Build a React App with TypeScript',
  'Build a React App with TypeScript and TailwindCSS',
  'Build a React App with TypeScript and TailwindCSS using Vite',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions and Storage',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions and Storage and Hosting',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions and Storage and Hosting and Analytics',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions and Storage and Hosting and Analytics and Performance Monitoring',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions and Storage and Hosting and Analytics and Performance Monitoring and Remote Config',
  'Build a React App with TypeScript and TailwindCSS using Vite and Firebase Hosting and Firestore and Authentication and Functions and Storage and Hosting and Analytics and Performance Monitoring and Remote Config and A/B Testing',
]

function TodoList() {
  const [todos, setTodos] = useState(exampleTodos);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const handleAddTodo = () => {
    setTodos([...todos, value]);
    setValue('');
    inputRef.current?.focus();
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} className='border-1' ref={inputRef} />
      <button onClick={() => handleAddTodo()}>
        Add Todo
      </button>
      <ul ref={listRef}>
      {
        todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))
      }
      </ul>
    </div>
  )
}


function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
  const [count, setCount] = useState(0);
  const simpleRef = useRef(0);
  const countRenders = useRef(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  countRenders.current = countRenders.current + 1;
  console.log("Renders:",  countRenders.current);

  return (
    <div className='flex flex-col gap-2'>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
{/* 
      <button onClick={() => inputRef.current?.focus() }>
        Focus Input
      </button>
      <input type='text' className='border-1' ref={inputRef} /> */}

      <TodoList />
      <VideoPlayer />
    </div>
  )
}

export default App
