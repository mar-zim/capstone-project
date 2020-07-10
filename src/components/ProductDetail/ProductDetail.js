import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetail({ products }) {
  const { productId } = useParams()
  const [selectedProduct] = products.filter(
    (product) => productId === product._id
  )

  return (
    <>
      <div>Produkt-ID: {productId}</div>
      <div>Name: {selectedProduct.product_name}</div>
      <Link to="/">zurück</Link>
    </>
  )
}
