import { number, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Pricing from './Pricing'

export default {
  component: Pricing,
  title: 'Product Detail Page/Pricing',
  decorators: [withKnobs],
}

export const withExampleData = () => <Pricing daily={4} weekly={26} />

export const withVariableData = () => (
  <Pricing daily={number('Daily Rate', 1)} weekly={number('Weekly Rate', 6)} />
)
