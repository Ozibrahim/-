import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Javascript yeri
  // let a = 15;
  // var vize1 = 80;
  // var vize2 = 60;
  // let sonuc = true;
  let isimler = [
    "ibrahim",
    "mehmet",
    "ahmet",
    "ayşe"
  ];

  return (
    //HTML yeri
    <div>
      {/* Ortalama : {(vize1+vize2)/2}
      {(vize1+vize2)/2>=50 ? <p>geçtin</p> : <p>kaldın</p>} */}

        {
        isimler.map((isim,index)=>(
          <div style={{
            background:'orange',
            border:'1px solid black',

          }} key={index}>{isim}</div>
        ))
      }
    
    
    
    
    
    
    
    </div>
  
  )
}

export default App
