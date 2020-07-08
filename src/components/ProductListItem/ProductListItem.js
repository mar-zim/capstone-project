import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ProductListItem({ product }) {
  return (
    <>
      <DividerLine />
      <h4>{product.product_name}</h4>
      <ProductInfo>
        <p>von {product.owner_firstname}</p>
        <p>aus {product.location}</p>
        <p className="text-light">Tel: {product.phone}</p>
        <Link to="/productdetail">mehr</Link>
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
