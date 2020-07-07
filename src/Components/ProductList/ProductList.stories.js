import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'
import ProductList from './ProductList'
import mockdata from '../../Assets/products.json'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  component: ProductList,
  title: 'ProductList',
}

export const withMockdata = () => <ProductList products={mockdata} />
