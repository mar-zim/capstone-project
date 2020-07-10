import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ProductListItem({ product }) {
  return (
    <>
      <DividerLine />
      <h4>{product.productName}</h4>
      <ProductInfo>
        <div>von {product.ownerFirstname}</div>
        <div>aus {product.location}</div>
        <div className="text-light">Tel: {product.phone}</div>
        <Link to={`/${product._id}`}>mehr</Link>
      </ProductInfo>
    </>
  )
}

export const DividerLine = styled.div`
  height: 1px;
  width: 90vw;
  background-color: var(--grey-5);
  margin-top: 25px;
`

export const ProductInfo = styled.div`
  margin-left: 52px;
`
