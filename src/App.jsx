import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  
  const [users,setUsers] = useState([])
  const API_URL = 'https://jsonplaceholder.typicode.com/users'

  console.log(users)

  const getUsers = async ()=>{
    await axios.get(API_URL)
    .then(response=>setUsers(response.data))
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Plus 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Minus 
        </button>
        <p>{count}</p>
       <ul>
         {
           users.map(user=><li key={user.id}>{user.name}</li>)
         }
       </ul>
      </div>
      
    </div>
  )
}

export default App
