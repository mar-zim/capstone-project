import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'
import ProductDetail from './ProductDetail'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

addDecorator(StoryRouter())

export default {
  component: ProductDetail,
  title: 'ProductDetail',
}

export const withExampleData = () => (
  <ProductDetail
    product={{
      _id: '5f0365f3f16421cef5239047',
      product_name: 'SUP Board',
      owner_firstname: 'Nele',
      phone: '0171 585-2791',
      location: 'Harvestehude',
    }}
  />
)
