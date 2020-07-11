import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DividerLine from '../DividerLine/DividerLine'

export default function ProductListItem({ product }) {
  return (
    <>
      <DividerLine />
      <h4>{product.productName}</h4>
      <ProductInfo>
        <div>von {product.ownerFirstname}</div>
        <div>aus {product.location}</div>
        <Link to={`/${product._id}`}>mehr</Link>
      </ProductInfo>
    </>
  )
}

export const ProductInfo = styled.div`
  margin-left: 52px;
`
