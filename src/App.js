import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import mockdata from '../src/components/__mocks__/products.json'
import Navigation from './components/Navigation/Navigation'
import firebaseApp from './firebase'
import LoginPage from './pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListPage from './pages/ProductListPage'
import loginContext from './services/loginContext'
import useAuth from './services/useAuth'
import AddProductPage from './pages/AddProductPage'

function App() {
  const user = useAuth()

  return (
    <loginContext.Provider value={{ user, firebaseApp }}>
      <AppWrapper>
        <Header />
        <StyledMain>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/login" component={LoginPage} />
            <Route
              path="/home"
              component={() => <ProductListPage products={mockdata} />}
            />
            <Route path="/add" component={AddProductPage} />
            <Route
              path="/details/:productId"
              component={() => <ProductDetailPage products={mockdata} />}
            />
          </Switch>
        </StyledMain>
        <Navigation />
      </AppWrapper>
    </loginContext.Provider>
  )
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 56px auto 56px;
  height: 100vh;
`

const StyledMain = styled.main`
  padding: 0 20px;
  overflow-y: scroll;
  &::after {
    content: '';
    display: block;
    height: 60px;
  }
`

export default App
