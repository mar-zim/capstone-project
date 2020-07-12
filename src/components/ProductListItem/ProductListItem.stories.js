import { object, withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react'
import React from 'react'
import StoryRouter from 'storybook-react-router'
import ProductListItem from './ProductListItem'

addDecorator(StoryRouter())

export default {
  component: ProductListItem,
  title: 'ProductListItem',
  decorators: [withKnobs],
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

export const withVariableData = () => (
  <ProductListItem product={object('productobject', 'paste object here')} />
)
