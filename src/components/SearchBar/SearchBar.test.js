import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import SearchBar from './SearchBar'

describe('SearchBar-Test', () => {
  it('should render the search icon', () => {
    render(<SearchBar isSearchBarVisible={false} />)
    expect(screen.getByAltText('searchIcon')).toBeInTheDocument()
  })

  it('should show the text input field when clicked on search icon', async () => {
    const { getByAltText, findByTestId } = render(
      <SearchBar isSearchBarVisible={false} />
    )
    fireEvent.click(getByAltText('searchIcon'))
    const inputField = await findByTestId('textField')
    screen.debug()
    expect(inputField).toBeInTheDocument()
  })
})
