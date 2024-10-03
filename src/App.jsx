import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import { Outlet } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

function App() {

  return (
    <>
      <Outlet />
      <Nav />
      </>
  )
}

export default App
