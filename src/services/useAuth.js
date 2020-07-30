import { useEffect, useState } from 'react'
import firebaseApp from '../firebase'

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null)
  const [userIsLoading, setUserIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) =>
      setAuthUser(user ? user : null)
    )
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    authUser && setUserIsLoading(false)
  }, [authUser])

  return [authUser, userIsLoading]
}
