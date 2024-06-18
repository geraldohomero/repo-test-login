import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Login from './components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div>
        <Login />
      </div>
    </div>
  )
}

export default App
