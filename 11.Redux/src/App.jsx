import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UsersList from './UsersList';


function App() {



  return (
    <div>
      <UsersList/>
  
    </div>

  )
}

export default App
