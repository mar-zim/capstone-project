import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import back from '../assets/images/back.svg'

export default function ProductDetailPage({ products }) {
  const { productId } = useParams()
  const [selectedProduct] = products.filter(
    (product) => productId === product._id
  )

  return (
    <>
      <Link to="/">
        <StyledBackButton src={back} alt="back" />
      </Link>
      <ProductDetail shownProduct={selectedProduct} />
    </>
  )
}

export const StyledBackButton = styled.img`
  width: 15px;
  margin: 10px;
`
