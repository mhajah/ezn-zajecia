import { useRef, useState } from 'react';
import './App.css'
import { flushSync } from 'react-dom';

function TodoList() {
  const listRef = useRef(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    setText('');
    flushSync(() => {
      setTodos([ ...todos, newTodo]);
    })
    listRef.current?.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  return (
    <>
      <button onClick={handleAdd}>
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1)
  });
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        document.exitFullscreen();
      }

    } else {
      videoRef.current?.play();
      videoRef.current?.requestFullscreen();
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
  const countRef = useRef(0);
  const inputRef = useRef(null);
  // inputRef = { current: 0 }
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => { 
        countRef.current = countRef.current + 1; alert(countRef.current) 
      }}>
        {countRef.current}
      </button>
      <input ref={inputRef} />
      <button onClick={() => {
        inputRef.current.focus()
      }}>
        Focus
      </button>
      <TodoList />
      <div>
        <VideoPlayer />
      </div>
    </div>
  )
}

export default App
