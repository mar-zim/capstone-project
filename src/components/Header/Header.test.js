import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import pretty from 'pretty'

describe('Header-Test', () => {
  it('should render the logo as an image', () => {
    const { queryByAltText } = render(<Header />, { wrapper: MemoryRouter })
    expect(queryByAltText('logo').tagName).toBe('IMG')
  })

  it('matches snapshot', () => {
    const { container } = render(<Header />, { wrapper: MemoryRouter })
    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
