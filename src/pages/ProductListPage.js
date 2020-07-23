import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import ProductList from '../components/ProductList/ProductList'
import SearchBar from '../components/SearchBar/SearchBar'
import { useHistory, useLocation } from 'react-router-dom'
import loginContext from '../services/loginContext'
import useLogout from '../services/useLogout'
import Button from '../components/Button/Button'
import styled from 'styled-components'

ProductListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}

export default function ProductListPage({ products }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { user } = useContext(loginContext)
  const location = useLocation()
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
        location.pathname !== '/login' &&
        location.pathname !== '/login/register' && (
          <UserBar>
            <h3>Willkommen!</h3>
            <Button text="Einloggen" onClick={goToLoginPage} />
          </UserBar>
        )
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
  /* border: 1px solid var(--grey-5);
  border-radius: 5px; */
  margin-top: 10px;
`
