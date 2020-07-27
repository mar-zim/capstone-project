import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import ProductList from '../components/ProductList/ProductList'
import SearchBar from '../components/SearchBar/SearchBar'
import loginContext from '../services/loginContext'
import useLogout from '../services/useLogout'

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductListPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { user } = useContext(loginContext)
  const history = useHistory()
  const logout = useLogout()

  const results = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products

  return (
    <>
      {user ? (
        <UserBar>
          <h3>Willkommen {user.displayName}!</h3>
          <Button text="logout" onClick={logout} />
        </UserBar>
      ) : (
        <UserBar>
          <h3>Willkommen!</h3>
          <Button text="Einloggen" onClick={goToLoginPage} />
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

  function goToLoginPage() {
    let path = `/login`
    history.push(path)
  }
}

const UserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  margin-top: 10px;
`
