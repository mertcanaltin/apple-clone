import { useState } from 'react'

import NavbarDesktop from './components/desktop/navbar'
import HomePage from './components/desktop/home-page'
import Footer from './components/desktop/footer'
import './App.css'

function App() {
  return (
    <div className="">
    <NavbarDesktop />
    <HomePage/>
    <Footer/> 

    </div>
  )
}

export default App
