import React from 'react'
import Header from '../src/components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import mockdata from '../src/assets/products.json'

function App() {
  return (
    <>
      <Header />
      <ProductList products={mockdata} />
    </>
  )
}

export default App
