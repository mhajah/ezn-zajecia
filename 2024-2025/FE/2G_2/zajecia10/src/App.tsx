import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  return (
    <>
      <div className="card">
        <Header count={count} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSecondCount((count) => count + 1)}>
          count is {secondCount}
        </button>
      </div>
    </>
  );
}

export default App;
