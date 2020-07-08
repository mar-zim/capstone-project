import React from 'react'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'
import Header from './Header'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
export default {
  component: Header,
  title: 'Header',
}

export const withLogo = () => <Header />
