import React from 'react'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import mockdata from '../src/components/__mocks__/products.json'
import { Switch, Route } from 'react-router-dom'
import Register from '../src/components/auth/Register'
import Login from './components/auth/Login'
import useAuth from './services/useAuth'
import LoginContext from './services/loginContext'
import firebaseApp from './firebase'
import UserBar from './components/auth/UserBar'

function App() {
  const user = useAuth()
  return (
    <LoginContext.Provider value={{ user, firebaseApp }}>
      <AppWrapper>
        <Header />
        <StyledMain>
          {user ? <p>User eingeloggt: {user.displayName}</p> : null}
          <UserBar />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route
              path="/details/:productId"
              component={() => <ProductDetailPage products={mockdata} />}
            />
            <Route
              exact
              path="/"
              component={() => <ProductListPage products={mockdata} />}
            />
          </Switch>
        </StyledMain>
      </AppWrapper>
    </LoginContext.Provider>
  )
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 56px auto;
  height: 100vh;
`

const StyledMain = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  &::after {
    content: '';
    display: block;
    height: 40px;
  }
`

export default App
