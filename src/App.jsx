import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar'
import Navbar2 from './component/navbar2'
import Heroimg from './component/heroimg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Navbar2/>
     <Heroimg/>
    </>
   
  )
}

export default App
