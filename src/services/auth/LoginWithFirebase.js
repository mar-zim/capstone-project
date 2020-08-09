import firebaseApp from '../../firebase'

export default async function loginWithFirebase(
  values,
  setLoginFeedback,
  history
) {
  try {
    await firebaseApp.signInWithEmailAndPassword(values.email, values.password)
    return history.push('/home')
  } catch (error) {
    error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'
      ? setLoginFeedback(
          'Deine E-Mail oder dein Passwort ist nicht korrekt. Bitte versuche es noch einmal!'
        )
      : setLoginFeedback(
          'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
        )
  }
}
