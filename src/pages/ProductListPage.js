import React from 'react'
import ProductListItem from '../components/ProductListItem/ProductListItem'

export default function ProductList({ products }) {
  return (
    <>
      <h2>Was kann ich ausleihen?</h2>
      {products.map((product) => (
        <ProductListItem product={product} key={product._id} />
      ))}
    </>
  )
}
