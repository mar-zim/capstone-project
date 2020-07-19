import React from 'react'
import SearchBar from './SearchBar'

export default {
  component: SearchBar,
  title: 'SearchBar',
}

export const Visible = () => <SearchBar isSearchBarVisible={true} />

export const Hidden = () => <SearchBar isSearchBarVisible={false} />
