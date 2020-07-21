import firebaseApp from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './config'

const firebaseInit = () => {
  firebaseApp.initializeApp(firebaseConfig)
  return firebaseApp.auth()
}

export default firebaseInit()
