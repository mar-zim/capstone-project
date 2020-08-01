import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import firebaseApp from './firebase'
import LoginPage from './pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProductListPage from './pages/ProductListPage'
import loginContext from './services/loginContext'
import useAuth from './services/useAuth'
import AddProductPage from './pages/AddProductPage'
import useProductsFromFirestore from './services/useProductsFromFirestore'
import Modal from './components/Modal/Modal'
import NotFoundPage from './pages/NotFoundPage'
import { useTransition } from 'react-spring'

function App() {
  const [user, userIsLoading] = useAuth()
  const [products, productsAreLoading] = useProductsFromFirestore()
  const [modalVisible, setModalVisible] = useState(false)
  const transitions = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-40px)' },
  })

  return (
    <loginContext.Provider value={{ user, userIsLoading, firebaseApp }}>
      <AppWrapper>
        <Header />
        <StyledMain>
          <button onClick={() => setModalVisible(true)}>Show modal</button>
          {transitions.map(
            ({ item, key, props: style }) =>
              item && (
                <Modal
                  style={style}
                  closeModal={() => setModalVisible(false)}
                  key={key}
                />
              )
          )}
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
