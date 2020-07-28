import { addDecorator } from '@storybook/react'
import React from 'react'
import loginContext from '../../services/loginContext'
import Navigation from './Navigation'

addDecorator((storyFn) => {
  const user = {
    uuid: '5f0365f31fb5a0f376d921a2',
    email: 'testuser',
  }

  return <loginContext.Provider value={user}>{storyFn()}</loginContext.Provider>
})

export default {
  component: Navigation,
  title: 'General/Navigation',
}

export const UserLoggedIn = () => <Navigation />
