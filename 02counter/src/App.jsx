import { useState } from 'react'

import './App.css'

function App() {

  // let count = 12;

  const [count, setCount] = useState(11);

  const addValue = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  const removeValue = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>React course proceeding to the next level</h1>
      <h2>Counter value: {count}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}
      >Remove value</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
