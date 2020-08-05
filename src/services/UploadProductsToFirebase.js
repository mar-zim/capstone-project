import { storage, db } from '../firebase/index'
import { v4 as uuidv4 } from 'uuid'

export async function UploadProductsToFirebase(
  values,
  user,
  imageAsFile,
  setFeedback,
  setModalVisible
) {
  const imageId = uuidv4()

  try {
    await storage.ref(`/images/${imageId}_${imageAsFile.name}`).put(imageAsFile)
    const firebaseUrl = await storage
      .ref('images')
      .child(imageId + '_' + imageAsFile.name)
      .getDownloadURL()

    await db.collection('products').add({
      name: values.name,
      description: values.description,
      dailyRate: parseInt(values.dailyRate),
      weeklyRate: parseInt(values.weeklyRate),
      phone: values.phone,
      location: values.location,
      ownerNotes: values.ownerNotes,
      userId: user.uid,
      ownerName: user.displayName,
      imgURL: firebaseUrl,
    })
    setModalVisible(true)
  } catch (error) {
    setFeedback(
      'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
    )
    console.log(error)
  }
}
