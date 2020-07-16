import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ProductListItem from '../components/ProductListItem/ProductListItem'
import Search from '../components/Search/Search'

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('')

  const results = !searchTerm
    ? products
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <>
      <Search
        products={products}
        handleChange={handleChange}
        searchTerm={searchTerm}
      />
      {results.map((product) => (
        <ProductListItem product={product} key={product._id} />
      ))}
    </>
  )

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }
}
