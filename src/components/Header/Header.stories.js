import React from 'react'
import Header from './Header'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn) => <div style={{ width: '375px' }}>{storyFn()}</div>)

export default {
  component: Header,
  title: 'General/Header',
}

export const Default = () => <Header />
