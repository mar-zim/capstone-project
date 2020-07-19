import React from 'react'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import mockdata from '../src/components/__mocks__/products.json'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <AppWrapper>
      <Header />
      <StyledMain>
        <Switch>
          <Route
            path="/:productId"
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
