import '@testing-library/jest-dom/extend-expect'
import { render, screen, getByText } from '@testing-library/react'
import fireEvent from '@testing-library/user-event'
import React from 'react'
import AddProductForm from './AddProductForm'

describe('Form renders correctly', () => {
  beforeEach(() => {
    const loggedInTestUser = { uid: '127dh37ndj732n', displayName: 'Testuser' }
    render(<AddProductForm user={loggedInTestUser} />)
  })

  it('should render a form', () => {
    const sampleForm = render(<AddProductForm />)
    expect(sampleForm).toBeTruthy()
  })

  it('should render an input field with the placeholder Titel', () => {
    expect(screen.getByPlaceholderText('Titel')).toBeInTheDocument()
  })

  it('should render an input field with the placeholder Beschreibung', () => {
    expect(screen.getByPlaceholderText('Beschreibung')).toBeInTheDocument()
  })

  it('should render an input field with the placeholder Stadtteil', () => {
    expect(screen.getByPlaceholderText('Stadtteil')).toBeInTheDocument()
  })

  it('should render an input field with the placeholder describing the availabilty', () => {
    expect(
      screen.getByPlaceholderText('Wann bist du erreichbar?')
    ).toBeInTheDocument()
  })

  it('should render a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should render a disabled button on form mount', () => {
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })
})

describe('Form validates correctly', () => {
  beforeEach(() => {
    const loggedInTestUser = { uid: '127dh37ndj732n', displayName: 'Testuser' }
    render(<AddProductForm user={loggedInTestUser} />)
  })

  it('should show error text if title of product is too short', async () => {
    await fireEvent.type(screen.getAllByRole('textbox')[0], 'Ho')
    expect(screen.getByText('Der Titel sollte etwas länger sein.'))
      .toBeInTheDocument
  })

  it('should show error text if product description is too short', async () => {
    await fireEvent.type(screen.getAllByRole('textbox')[1], 'Fo')
    expect(screen.getByText('Die Beschreibung sollte etwas länger sein.'))
      .toBeInTheDocument
  })

  it('should show error text if dailyRate entered is not a number', async () => {
    await fireEvent.type(screen.getAllByRole('textbox')[2], '6J')
    expect(
      screen.getByText(
        'Bitte gib einen gültigen Betrag in ganzen € Schritten ein!'
      )
    ).toBeInTheDocument
  })

  it('should show error text if weeklyRate entered is a number with more than 4 digits', async () => {
    await fireEvent.type(screen.getAllByRole('textbox')[3], '6J')
    expect(
      screen.getByText(
        'Bitte gib einen gültigen Betrag in ganzen € Schritten ein!'
      )
    ).toBeInTheDocument
  })

  it('should show error text if phone number contains anything else than numbers', async () => {
    await fireEvent.type(screen.getAllByRole('textbox')[4], '0186293 8369 2')
    expect(
      screen.getByText(
        'Bitte gib eine gültige Telefon-Nummer ohne Leerzeichen ein!'
      )
    ).toBeInTheDocument
  })

  it('should show error text if the location entered is too long', async () => {
    await fireEvent.type(
      screen.getAllByRole('textbox')[5],
      'Eine lange Stadt, die es gar nicht gibt'
    )
    expect(
      screen.getByText('So einen langen Stadtteil gibt es doch gar nicht.')
    ).toBeInTheDocument
  })

  it('should show error text if the ownerNotes are too short', async () => {
    await fireEvent.type(screen.getAllByRole('textbox')[6], 'fo')
    expect(
      screen.getByText(
        'Die Beschreibung zu deiner Erreichbarkeit sollte etwas länger sein.'
      )
    ).toBeInTheDocument
  })
})
