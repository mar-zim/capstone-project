import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ProductList from '../components/ProductList/ProductList'
import SearchBar from '../components/SearchBar/SearchBar'
import loginContext from '../services/loginContext'

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductListPage({ products, productsAreLoading }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { user } = useContext(loginContext)

  const results = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products

  return productsAreLoading ? (
    <div>lädt</div>
  ) : (
    <>
      {user ? (
        <UserBar>
          <h3>Willkommen {user.displayName}!</h3>
        </UserBar>
      ) : (
        <UserBar>
          <h3>Willkommen!</h3>
        </UserBar>
      )}

      <SearchBar setSearchTerm={setSearchTerm} searchInput={searchTerm} />
      {results.length > 0 ? (
        <ProductList shownProducts={results} />
      ) : (
        <div>Leider keine Ergebnisse!</div>
      )}
    </>
  )
}

const UserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  margin-top: 10px;
`
