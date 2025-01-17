import { useMemo, useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  return (
    <>
      <Header count={secondCounter} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={() => setSecondCounter((count) => count + 1)}>
        count is {secondCounter}
      </button>
    </>
  );
}

export default App;
