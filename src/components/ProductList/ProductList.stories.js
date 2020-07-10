import React from 'react'
import ProductList from './ProductList'
import mockdata from '../../assets/products.json'

export default {
  component: ProductList,
  title: 'ProductList',
}

export const withMockdata = () => <ProductList products={mockdata} />
