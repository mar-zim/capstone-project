import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'
import ProductListItem from './ProductListItem'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

export default {
  component: ProductListItem,
  title: 'ProductListItem',
}

export const withExampleData = () => (
  <ProductListItem
    product={{
      _id: '5f0365f3f16421cef5239047',
      product_name: 'SUP Board',
      owner_firstname: 'Nele',
      phone: '0171 585-2791',
      location: 'Harvestehude',
    }}
  />
)
export const withNoData = () => <ProductListItem product={{}} />
