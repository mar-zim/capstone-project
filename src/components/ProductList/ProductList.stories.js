import React from 'react'
import mockdata from '../__mocks__/products.json'
import ProductList from './ProductList'

export default {
  component: ProductList,
  title: 'ProductList',
}

export const withExampleData = () => <ProductList shownProducts={mockdata} />

export const withNoData = () => <ProductList shownProducts={[]} />
