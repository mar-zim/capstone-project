import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ProductDescription from './ProductDescription'

describe('ProductDescription-Test', () => {
  it('should render the description text', () => {
    const testDescription = 'Test'
    render(<ProductDescription description={testDescription} />)
    expect(screen.getByText(testDescription)).toBeInTheDocument()
  })

  it('should show Beschreibung in a header element', () => {
    const { queryByText } = render(<ProductDescription />)
    expect(queryByText('Beschreibung')).toBeTruthy()
    expect(queryByText('Beschreibung').tagName).toContain('H')
  })
})
