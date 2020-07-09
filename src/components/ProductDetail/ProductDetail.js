import React from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch, useParams } from 'react-router-dom'

export default function ProductDetail({ products }) {
  const { productId } = useParams()

  return (
    <>
      <div>Produkt-ID: {productId}</div>
      {products.map(
        (product) =>
          productId === product._id && <div>Name: {product.product_name}</div>
      )}
      <Link to="/">zurück</Link>
    </>
  )
}
