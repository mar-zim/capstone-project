import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Pricing from './Pricing'

describe('Pricing-Test', () => {
  it('should render the daily and weekly rate', () => {
    const testDailyRate = 10
    const testWeeklyRate = 300
    render(<Pricing daily={testDailyRate} weekly={testWeeklyRate} />)
    expect(screen.getByText('10 €')).toBeInTheDocument()
    expect(screen.getByText('300 €')).toBeInTheDocument()
  })

  it('should show Leihgebühr in a header element', () => {
    const { queryByText } = render(<Pricing />)
    expect(queryByText('Leihgebühr')).toBeTruthy()
    expect(queryByText('Leihgebühr').tagName).toContain('H')
  })
})
