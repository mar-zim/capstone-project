import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from './config'

const firebaseInit = () => {
  firebaseApp.initializeApp(firebaseConfig)
  return firebaseApp.auth()
}

export default firebaseInit()

export const db = firebaseApp.firestore()

export const storage = firebaseApp.storage()
