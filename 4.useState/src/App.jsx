import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('ibrahim');
  const [lastName, setLastName] = useState('öz');
  const [count, setCount] = useState(0)
  const [names, setnames] = useState("ahmet", "mehmet", "veli");
  const [userInfo, setUserInfo] = useState({ username: "ibrahim", password: "123" })
  const [show, setShow] = useState(false)
  const handleChange = () => {
    setFirstName("Fatma")
  }
  const arttır = () => {
    setCount(count + 1)
  }
  const azalt = () => {
    if(count>0){
      setCount(count - 1)

    }
   
  }

  return (
    <div>
      <div>
        {/* {firstName} {lastName}
      </div>
      <div>
        <button onClick={()=>{setFirstName("Fatma")}}>isim değiştir</button>
        <button onClick={handleChange}>isim değiştir</button> */}
        {/* {show ? <div>{userInfo.username} {userInfo.password}</div>  : <div>Yanlış girdiniz </div>}
        <button onClick={()=>{setShow(true)}}>Giriş Yap</button> */}
        {count}
        <div>
          <button onClick={arttır}>Arttır</button>
        </div>
        <div>
          <button onClick={azalt}>Azalt</button>
        </div>
      </div>
    </div>

  )
}

export default App
