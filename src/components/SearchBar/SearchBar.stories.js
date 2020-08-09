import React from 'react'
import SearchBar from './SearchBar'

export default {
  component: SearchBar,
  title: 'General/SearchBar',
}

export const ClickToOpen = () => <SearchBar />

export const WithInput = () => <SearchBar searchInput="text" />
