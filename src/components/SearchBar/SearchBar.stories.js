import React from 'react'
import SearchBar from './SearchBar'

export default {
  component: SearchBar,
  title: 'General/SearchBar',
}

export const Visible = () => <SearchBar isSearchBarVisible={true} />

export const Hidden = () => <SearchBar isSearchBarVisible={false} />
