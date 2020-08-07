import { v4 as uuidv4 } from 'uuid'
import { storage } from '../firebase/index'

export default async function UploadImageToStorage(
  setimagePreviewIsLoading,
  image,
  setFeedback,
  setImageUrl,
  setImageAsFile
) {
  console.log('image:', image)
  setimagePreviewIsLoading(true)
  const imageId = uuidv4()
  try {
    if (!image.type.includes('image')) {
      setFeedback(
        'Bitte wähle ein Bild in einem gültigen Bild-Format (zum Beispiel JPEG oder PNG).'
      )
    }
    setImageAsFile(image)
    await storage.ref(`/images/${imageId}_${image.name}`).put(image)
    const firebaseUrl = await storage
      .ref('images')
      .child(imageId + '_' + image.name)
      .getDownloadURL()
    setImageUrl(firebaseUrl)
    firebaseUrl && setimagePreviewIsLoading(false)
  } catch (error) {
    setFeedback(
      'Dein Bild konnte leider nicht hochgeladen werden! Bitte versuche es noch einmal!'
    )
  }
}
