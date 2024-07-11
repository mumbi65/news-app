import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import NewsContainer from './components/newscontainer'

function App() {

  return (
    <>
      <NavBar/>
      <NewsContainer/>
    </>
  )
}

export default App
