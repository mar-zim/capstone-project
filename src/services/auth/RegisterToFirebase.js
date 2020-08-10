import firebaseApp from '../../firebase'

export default async function registerToFirebase(
  values,
  setModalVisible,
  setRegisterFeedback
) {
  try {
    const newUser = await firebaseApp.createUserWithEmailAndPassword(
      values.email,
      values.password
    )
    await newUser.user.updateProfile({
      displayName: values.name,
    })
    setModalVisible(true)
  } catch (error) {
    setRegisterFeedback(
      'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
    )
  }
}
