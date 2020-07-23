import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import loginContext from './loginContext'

export default function useLogout() {
  const { firebaseApp } = useContext(loginContext)
  const history = useHistory()

  const logoutFromFirebase = async () => {
    await firebaseApp.signOut()
    history.push('/login')
  }

  return logoutFromFirebase
}
