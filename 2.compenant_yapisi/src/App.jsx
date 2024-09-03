import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import { user } from './Login'

function App() {
  console.log(user);


  return (
    <div>
      <Login />
    </div>
  )
}

export default App
