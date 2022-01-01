import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App gradient-background">
        <h1 className='font-bold text-3xl underline'>Hello</h1>
    </div>
  )
}

export default App
