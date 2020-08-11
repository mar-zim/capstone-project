import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Modal from './Modal'

describe('Modal-Test', () => {
  it('should render a header text', () => {
    const testHeader = 'Hallo'
    render(<Modal modalVisible={true} header={testHeader} />)
    expect(screen.getByText(testHeader)).toBeInTheDocument()
  })

  it('should render a body text', () => {
    const testText = 'Ich bin der body des Modals.'
    render(<Modal modalVisible={true} text={testText} />)
    expect(screen.getByText(testText)).toBeInTheDocument()
  })

  it('should render the modal without any content', () => {
    render(<Modal modalVisible={true} header="" text="" testid="test-modal" />)
    expect(screen.getByTestId('test-modal')).toBeInTheDocument()
  })
})
