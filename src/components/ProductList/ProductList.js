import PropTypes from 'prop-types'
import React from 'react'
import ProductListItem from '../ProductListItem/ProductListItem'
import styled from 'styled-components'

ProductList.propTypes = {
  shownProducts: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductList({ shownProducts }) {
  return (
    <StyledProductList>
      {shownProducts.map((product) => (
        <ProductListItem product={product} key={product._id} />
      ))}
    </StyledProductList>
  )
}

const StyledProductList = styled.div`
  margin-top: 20px;
`
