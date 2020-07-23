import { addDecorator } from '@storybook/react'
import React from 'react'
import loginContext from '../../services/loginContext'
import Header from './Header'

addDecorator((storyFn) => {
  const user = true

  return (
    <loginContext.Provider value={user}>{storyFn(user)}</loginContext.Provider>
  )
})
export default {
  component: Header,
  title: 'Header',
}

export const withUserLoggedIn = () => <Header />
