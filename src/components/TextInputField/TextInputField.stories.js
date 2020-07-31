import React from 'react'
import TextInputField from './TextInputField'

export default {
  component: TextInputField,
  title: 'Form Elements/TextInputField',
}

export const Default = () => <TextInputField />

export const withPlaceholder = () => (
  <TextInputField placeholder="Hier ist ein Placeholder" />
)

export const wider = () => <TextInputField width={90} />

export const narrowWithLabel = () => (
  <TextInputField width={20} label="€ Gebühr pro Tag" />
)
