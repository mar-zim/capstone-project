import React, { useEffect, useState } from 'react'
import Header from '../src/Components/Header/Header'
import ProductList from './Components/ProductList/ProductList'
import mockdata from '../src/Assets/products.json'

function App() {
  return (
    <>
      <Header />
      <ProductList products={mockdata} />
    </>
  )
}

export default App
