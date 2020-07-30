import React from 'react'
import TextAreaField from './TextAreaField'

export default {
  component: TextAreaField,
  title: 'Form Elements/TextAreaField',
}

export const withPlaceholderText = () => (
  <TextAreaField placeholder="Placeholder Text" />
)
export const widerWithPlaceholderText = () => (
  <TextAreaField placeholder="Placeholder Text" width={90} />
)
