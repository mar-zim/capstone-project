import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail/ProductDetail'

export default function ProductDetailPage({ products }) {
  const { productId } = useParams()
  const [selectedProduct] = products.filter(
    (product) => productId === product._id
  )

  return (
    <>
      <Link to="/">zurück</Link>
      <ProductDetail shownProduct={selectedProduct} />
    </>
  )
}
