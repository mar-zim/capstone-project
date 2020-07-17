import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import SearchBar from './SearchBar'

describe('SearchBar-Test', () => {
  it('should render the search icon', () => {
    render(<SearchBar isSearchBarVisible={false} />)
    expect(screen.getByAltText('searchIcon')).toBeInTheDocument()
  })

  it('should show the text input field when visible', () => {
    render(<SearchBar isSearchBarVisible={true} />)
    expect(screen.getByTestId('textField')).toBeInTheDocument()
  })
})
