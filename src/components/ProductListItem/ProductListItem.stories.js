import React from 'react'
import ProductListItem from './ProductListItem'
import { addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())

export default {
  component: ProductListItem,
  title: 'ProductListItem',
}

export const withExampleData = () => (
  <ProductListItem
    product={{
      _id: '5f0365f3f16421cef5239047',
      productName: 'SUP Board',
      ownerFirstname: 'Nele',
      phone: '0171 585-2791',
      location: 'Harvestehude',
    }}
  />
)
export const withNoData = () => <ProductListItem product={{}} />
