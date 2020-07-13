import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

it('renders the logo', () => {
  const testLogo = 'logo'
  render(<Header>{testLogo}</Header>, { wrapper: MemoryRouter })
  expect(screen.getByAltText('logo')).toBeInTheDocument
})
