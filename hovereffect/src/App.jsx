import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Designer from './components/Designer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Designer/>
    </>
  )
}

export default App
