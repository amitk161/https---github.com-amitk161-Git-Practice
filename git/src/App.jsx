import React, {useState, useEffect} from 'react'
import axios from "axios";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const incCount = () => {
    setCount(prev => prev + 1);
  }

  const decCount = () => {
    setCount(prev => prev - 1);
  }

  const handleInfo = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?page=');
      const data = response.then((res) => setData(res.title));
      setLoading(false);
    }catch(err) {
      console.log("Error encountered", err);
      setLoading(false);
    }
  }

  return (
    <div>
      <h3>Counting machine</h3>
      <button onClick={incCount}>+</button>
      <p>{count}</p>
      <button onClick={decCount}>-</button>
      <button onClick={handleInfo}>Show Information</button>
      {data.map((ele) => {
        return (
          <li key={ele.id}>{ele.title}</li>
        )
      })}
    </div>
  )
}
