import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'

addDecorator((storyFn) => <div style={{ margin: '20px' }}>{storyFn()}</div>)

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
