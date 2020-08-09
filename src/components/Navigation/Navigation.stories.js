import { addDecorator } from '@storybook/react'
import React from 'react'
import LoginContext from '../../services/auth/LoginContext'
import Navigation from './Navigation'

addDecorator((storyFn) => {
  const user = {
    uid: '5f0365f31fb5a0f376d921a2',
    email: 'testuser',
  }

  return <LoginContext.Provider value={user}>{storyFn()}</LoginContext.Provider>
})

addDecorator((storyFn) => <div style={{ width: '375px' }}>{storyFn()}</div>)

export default {
  component: Navigation,
  title: 'General/Navigation',
}

export const UserLoggedIn = () => (
  <Navigation
    user={{
      uid: '5f0365f31fb5a0f376d921a2',
      email: 'testuser@testmail.de',
    }}
  />
)

export const UserLoggedOut = () => <Navigation user={null} />
