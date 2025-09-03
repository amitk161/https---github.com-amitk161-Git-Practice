import React, {useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(prev => prev + 1);
  }

  const decCount = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <h3>Counting machine</h3>
      <button onClick={incCount}>+</button>
      <p>{count}</p>
      <button onClick={decCount}>-</button>
    </div>
  )
}
