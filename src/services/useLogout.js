import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LoginContext from './LoginContext'

export default function useLogout() {
  const { firebaseApp } = useContext(LoginContext)
  const history = useHistory()

  const logoutFromFirebase = async () => {
    await firebaseApp.signOut()
    history.push('/login')
  }

  return logoutFromFirebase
}
