import React from 'react'
import ProductDetail from './ProductDetail'
import mockdata from '../../assets/products.json'

export default {
  component: ProductDetail,
  title: 'ProductDetail',
}

export const withMockData = () => {
  return <ProductDetail products={mockdata} />
}
