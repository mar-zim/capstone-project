import React from 'react'
import ProductDetail from './ProductDetail'

export default {
  component: ProductDetail,
  title: 'ProductDetail',
}

export const withExampleData = () => (
  <ProductDetail
    shownProduct={{
      _id: '5f0365f31256a6f4d9e8ee04',
      productName: 'Waffeleisen',
      ownerFirstname: 'Johanna',
      phone: '0171 527-3950',
      location: 'Barmbek',
    }}
  />
)
