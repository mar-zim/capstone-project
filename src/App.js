import React from 'react'
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import mockdata from '../src/assets/products.json'

function App() {
  return (
    <AppWrapper>
      <Header />
      <StyledMain>
        <ProductList products={mockdata} />
      </StyledMain>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 56px auto;
`

const StyledMain = styled.main`
  padding: 20px;
  max-width: 375px;
  overflow: scroll;
`

export default App
