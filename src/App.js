import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import Modal from './components/Modal/Modal'
import Navigation from './components/Navigation/Navigation'
import firebaseApp from './firebase'
import AddProductPage from './pages/AddProductPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListPage from './pages/ProductListPage'
import loginContext from './services/loginContext'
import useAuth from './services/useAuth'
import useProductsFromFirestore from './services/useProductsFromFirestore'

function App() {
  const [user, userIsLoading] = useAuth()
  const [products, productsAreLoading] = useProductsFromFirestore()
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <loginContext.Provider value={{ user, userIsLoading, firebaseApp }}>
      <AppWrapper>
        <Header />
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <StyledMain>
          <button onClick={() => setModalVisible(true)}>Show modal</button>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/modal" component={Modal} /> */}
            <Route
              path="/home"
              component={() => (
                <ProductListPage
                  products={products}
                  productsAreLoading={productsAreLoading}
                />
              )}
            />
            {user && <Route path="/add" component={AddProductPage} />}
            <Route
              path="/details/:productId"
              component={() => (
                <ProductDetailPage
                  products={products}
                  productsAreLoading={productsAreLoading}
                />
              )}
            />
            <Route component={NotFoundPage} />
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
    height: 20px;
  }
`

export default App
