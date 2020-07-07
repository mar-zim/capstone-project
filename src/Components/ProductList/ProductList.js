import React from 'react'
import styled from 'styled-components'
import ProductListItem from '../ProductListItem/ProductListItem'

export default function ProductList({ products }) {
  return (
    <MainGrid>
      <h2>Was kann ich ausleihen?</h2>
      <div>
        {products.map((product) => (
          <ProductListItem product={product} key={product._id} />
        ))}
      </div>
    </MainGrid>
  )
}

const MainGrid = styled.main`
  padding: 20px;
  max-width: 375px;
`
