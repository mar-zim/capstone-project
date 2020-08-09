import { addDecorator } from '@storybook/react'
import React from 'react'
import LoginContext from '../../services/auth/LoginContext'
import Navigation from './Navigation'

addDecorator((storyFn) => {
  const user = {
    uuid: '5f0365f31fb5a0f376d921a2',
    email: 'testuser',
  }

  return <LoginContext.Provider value={user}>{storyFn()}</LoginContext.Provider>
})

export default {
  component: Navigation,
  title: 'General/Navigation',
}

export const UserLoggedIn = () => <Navigation />
