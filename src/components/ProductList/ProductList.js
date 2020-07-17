import PropTypes from 'prop-types'
import React from 'react'
import ProductListItem from '../ProductListItem/ProductListItem'

ProductList.propTypes = {
  shownProducts: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductList({ shownProducts }) {
  return (
    <>
      {shownProducts.map((product) => (
        <ProductListItem product={product} key={product._id} />
      ))}
    </>
  )
}
