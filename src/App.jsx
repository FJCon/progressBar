import { useState } from 'react'
import Timer from './components/Timer/Timer'
import ProgressBar from './components/ProgessBar/ProgressBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timer/>
      <ProgressBar/>
    </>
  )
}

export default App
