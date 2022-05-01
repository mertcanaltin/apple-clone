import { useState } from 'react'

import NavbarDesktop from './components/desktop/navbar'
import HomePage from './components/desktop/home-page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
    <NavbarDesktop />
    <HomePage/>


    </div>
  )
}

export default App
