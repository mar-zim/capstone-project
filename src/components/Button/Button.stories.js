import React from 'react'
import Button from './Button'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
}

export const withShortText = () => <Button text="short" />

export const withLongText = () => (
  <Button text="This is a rather long text for a button" />
)
export const withoutText = () => <Button text="" />

export const withVariableText = () => (
  <Button text={text('Button text', 'enter button text here')} />
)
