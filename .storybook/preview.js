import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
