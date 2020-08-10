import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ProductList from '../components/ProductList/ProductList'
import SearchBar from '../components/SearchBar/SearchBar'
import SpinningLogoIcon from '../components/ui/SpinningLoadIcon/SpinningLoadIcon'
import LoginContext from '../services/auth/LoginContext'

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  productsAreLoading: PropTypes.bool,
}

export default function ProductListPage({ products, productsAreLoading }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { user, userIsLoading } = useContext(LoginContext)

  const results = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products

  return productsAreLoading || userIsLoading ? (
    <SpinningLogoIcon />
  ) : (
    <>
      {user && (
        <UserBar>
          <h3>Willkommen {user.displayName}!</h3>
        </UserBar>
      )}

      <SearchBar setSearchTerm={setSearchTerm} searchInput={searchTerm} />
      <div className="caption">
        Klicke auf die Produkte, um Details zu sehen.
      </div>
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
