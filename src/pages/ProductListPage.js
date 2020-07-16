import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Search from '../components/Search/Search'
import cross from '../icons/cross.svg'
import searchIcon from '../icons/search.svg'
import styled from 'styled-components'
import ProductList from '../components/ProductList/ProductList'

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductListPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function viewSearch() {
    setShowSearch(true)
  }

  function endSearch() {
    setSearchTerm('')
    setShowSearch(false)
  }

  function clearSearchField() {
    setSearchTerm('')
  }

  const results = !searchTerm
    ? products
    : products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <>
      {showSearch ? (
        <StyledIcon src={cross} alt="cross" onClick={endSearch} />
      ) : (
        <StyledIcon src={searchIcon} alt="searchIcon" onClick={viewSearch} />
      )}
      {showSearch && (
        <Search
          search={searchTerm}
          onSearch={handleSearch}
          deleteText={clearSearchField}
        />
      )}
      <ProductList shownProducts={results} />
    </>
  )
}

const StyledIcon = styled.img`
  height: 15px;
  margin-top: 15px;
`
