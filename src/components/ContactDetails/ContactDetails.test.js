import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ContactDetails from './ContactDetails'

describe('ContactDetails-Test', () => {
  it('should render the name and the location of the owner', () => {
    const testName = 'Bob'
    const testLocation = 'Eimsbüttel'
    render(<ContactDetails firstName={testName} location={testLocation} />)
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Eimsbüttel')).toBeInTheDocument()
  })

  it('should show Kontakt in a header element', () => {
    const { queryByText } = render(<ContactDetails />)
    expect(queryByText('Kontakt')).toBeTruthy()
    expect(queryByText('Kontakt').tagName).toContain('H')
  })
})
