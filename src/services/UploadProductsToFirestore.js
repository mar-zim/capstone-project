import { db } from '../firebase/index'

export async function UploadProductsToFirestore(
  values,
  user,
  setFeedback,
  setModalVisible,
  imageUrl
) {
  try {
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
      imgURL: imageUrl,
    })
    setModalVisible(true)
  } catch (error) {
    setFeedback(
      'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
    )
  }
}
