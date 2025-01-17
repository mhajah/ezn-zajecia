import { useMemo, useState } from 'react'
import './App.css'
import Header from './Header';

function slowFunction(count: number) {
  let i = 0;
  console.log('Calculating...');
  while (i < 1000000000) {
    i++;
  }
  return i + count;
}

function App() {
  const [count, setCount] = useState(0)
  const [secondCounter, setSecondCounter] = useState(0)
  const slowCalculate = useMemo(() => slowFunction(count), [count]);

  return (
    <>
      <div>
        <Header counterValue={secondCounter} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSecondCounter((secondCounter) => secondCounter + 1)}>
          secondCounter is {secondCounter}
        </button>
        <br />
        {slowCalculate}
      </div>
    </>
  )
}

export default App
