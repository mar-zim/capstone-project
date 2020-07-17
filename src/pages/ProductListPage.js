import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ProductList from '../components/ProductList/ProductList'
import SearchBar from '../components/SearchBar/SearchBar'

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductListPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)

  const results = !searchTerm
    ? products
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <>
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchInput={searchTerm}
        isSearchBarVisible={isSearchBarVisible}
        setIsSearchBarVisible={setIsSearchBarVisible}
      />
      {results.length > 0 ? (
        <ProductList shownProducts={results} />
      ) : (
        <div>Leider keine Ergebnisse!</div>
      )}
    </>
  )
}
