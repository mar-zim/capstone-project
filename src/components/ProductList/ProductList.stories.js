import { addDecorator } from '@storybook/react'
import React from 'react'
import StoryRouter from 'storybook-react-router'
import mockdata from '../__mocks__/products.json'
import ProductList from './ProductList'

addDecorator(StoryRouter())

export default {
  component: ProductList,
  title: 'ProductList',
}

export const withExampleData = () => <ProductList shownProducts={mockdata} />

export const withNoData = () => <ProductList shownProducts={[]} />
