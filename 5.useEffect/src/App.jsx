import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'


function App() {

  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")

  useEffect(()=>{
    console.log("Her zaman çalışır")
  })
  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır")

  },[])

  useEffect(()=>{
    console.log("ilk render edildiğinde ve firstName state değeri değiştiğinde")
  },[firstName])
  useEffect(()=>{
    console.log("ilk render edildiğinde ve lastName state değeri değiştiğinde")
  },[lastName])

  return (
    <div>
      <div>{firstName} {lastName}</div>
      <div><button onClick={()=>setFirstName("İbrahim")}>Adı değiştir</button></div>
      <div><button onClick={()=>setLastName("ÖZ")}>Soyadı değiştir</button></div>

    </div>
   
  )
}

export default App
