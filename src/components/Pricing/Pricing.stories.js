import React from 'react'
import Pricing from './Pricing'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  component: Pricing,
  title: 'Pricing',
  decorators: [withKnobs],
}

export const withExampleData = () => <Pricing daily={4} weekly={26} />

export const withVariableData = () => (
  <Pricing daily={number('Daily Rate', 1)} weekly={number('Weekly Rate', 6)} />
)
