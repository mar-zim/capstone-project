import React, { useContext } from 'react'
import LoginContext from '../../services/loginContext'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'

export default function Logout() {
  const { firebaseApp } = useContext(LoginContext)
  const history = useHistory()

  async function logoutFromFirebase() {
    await firebaseApp.signOut()
    history.push('/')
  }

  return <Button text="Abmelden" onClick={logoutFromFirebase} />
}
