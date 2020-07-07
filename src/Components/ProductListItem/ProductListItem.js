import React from 'react'
import styled from 'styled-components'

export default function ProductListItem({ product }) {
  return (
    <>
      <DividerLine />
      <h4>{product.product_name}</h4>
      <ProductDetails>
        <p>von {product.owner_firstname}</p>
        <p>aus {product.location}</p>
        <p className="text-light">Tel: {product.phone}</p>
      </ProductDetails>
    </>
  )
}

export const DividerLine = styled.div`
  height: 1px;
  width: 335px;
  background-color: var(--grey-5);
  margin-top: 25px;
`

export const ProductDetails = styled.div`
  margin-left: 52px;
`
