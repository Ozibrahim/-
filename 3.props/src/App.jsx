import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container';

function App() {

  const productName = "Buzdolabı";

  return (
    <div>
      <Container>
        <Product productName="Ayakkabı" price={3200} />
        <hr />
        <Product productName="Pantolon" price={900} />
        <hr />
        <Product productName={productName} price={15000} />
      </Container>

    </div>
  )
}

export default App
