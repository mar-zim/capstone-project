import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import ProductListItem from '../components/ProductListItem/ProductListItem'
import Search from '../components/Search/Search'

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <>
      <h2>Was kann ich ausleihen?</h2>
      <Search
        products={products}
        handleChange={handleChange}
        searchTerm={searchTerm}
      />
      {searchResults.map((product) => (
        <ProductListItem product={product} key={product._id} />
      ))}
      {/* {products.map((product) => (
        <ProductListItem product={product} key={product._id} />
      ))} */}
    </>
  )

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }
}
