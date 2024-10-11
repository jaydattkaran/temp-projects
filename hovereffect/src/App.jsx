import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
// import Designer from './components/Designer'
import Experience from './components/Experience'
import AnotherComponent from './components/AnotherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Designer/> */}
      <Experience/>
      <AnotherComponent/>
    </>
  )
}

export default App
