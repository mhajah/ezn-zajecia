import { useMemo, useState } from 'react'
import './App.css'
import Header from './Header';

const slowFunction = (counter: number) => {
  let i = 0
  console.log('Slow calculating...');
  while (i < 1000000000) i++;

  return i + counter;
}

// useMemo

function App() {
  const [count, setCount] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const slowCalculation = useMemo(() => slowFunction(count), [count]);

  return (
    <>
      <div className="card">
        <Header counterValue={secondCounter} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSecondCounter((secondCounter) => secondCounter + 1)}>
          secondCounter is {secondCounter}
        </button>
        <br />
        {slowCalculation}
      </div>
    </>
  )
}

export default App
