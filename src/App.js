import React from 'react'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'
import mockdata from '../src/assets/products.json'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <AppWrapper>
      <Header />
      <StyledMain>
        <Switch>
          <Route
            path="/productdetail"
            component={() => <ProductDetail products={mockdata} />}
          />
          <Route
            exact
            path="/"
            component={() => <ProductList products={mockdata} />}
          />
        </Switch>
      </StyledMain>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 56px auto;
`

const StyledMain = styled.main`
  padding: 20px;
  overflow: scroll;
`

export default App
