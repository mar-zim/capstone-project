import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('Button-Test', () => {
  it('should render a text', () => {
    const testText = 'Hallo'
    render(<Button text={testText} />)
    expect(screen.getByText(testText)).toBeInTheDocument()
  })

  it('should call a function on click', () => {
    const onTestClick = jest.fn()
    const { getByRole } = render(<Button onClick={onTestClick} />)
    fireEvent.click(getByRole('button'))
    expect(onTestClick).toHaveBeenCalled()
  })
})
