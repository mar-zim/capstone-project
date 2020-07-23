import React, { useContext } from 'react'
import loginContext from '../../services/loginContext'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'

export default function LogoutButton() {
  const { firebaseApp } = useContext(loginContext)
  const history = useHistory()

  async function logoutFromFirebase() {
    await firebaseApp.signOut()
    history.push('/login')
  }

  return (
    <Button
      backColor="var(--lightblue)"
      text="logout"
      onClick={logoutFromFirebase}
    />
  )
}
