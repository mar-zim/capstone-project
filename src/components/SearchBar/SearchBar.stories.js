import { addDecorator } from '@storybook/react'
import React from 'react'
import StoryRouter from 'storybook-react-router'
import mockdata from '../__mocks__/products.json'
import SearchBar from './SearchBar'

addDecorator(StoryRouter())

export default {
  component: SearchBar,
  title: 'SearchBar',
}

export const Visible = () => <SearchBar isSearchBarVisible={true} />

export const Hidden = () => <SearchBar isSearchBarVisible={false} />
