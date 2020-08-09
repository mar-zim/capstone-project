import { v4 as uuidv4 } from 'uuid'
import { storage } from '../firebase/index'
import DeleteImageFromStorage from './DeleteImageFromStorage'

export default async function UploadImageToStorage(
  setImagePreviewIsLoading,
  image,
  setFeedback,
  setImageUrl,
  setImageAsFile,
  imageUrl
) {
  const imageId = uuidv4()
  setImagePreviewIsLoading(true)
  setFeedback('')
  imageUrl &&
    (await DeleteImageFromStorage(imageUrl, setImageUrl, setImageAsFile))
  try {
    if (!image.type.includes('image')) {
      setFeedback(
        'Bitte wähle ein Bild in einem gültigen Bild-Format (zum Beispiel JPG oder PNG).'
      )
      setImagePreviewIsLoading(false)
      return
    }
    setImageAsFile(image)
    await storage.ref(`/images/${imageId}_${image.name}`).put(image)
    const firebaseUrl = await storage
      .ref('images')
      .child(imageId + '_' + image.name)
      .getDownloadURL()
    setImageUrl(firebaseUrl)
    firebaseUrl && setImagePreviewIsLoading(false)
  } catch (error) {
    setFeedback(
      'Dein Bild konnte leider nicht hochgeladen werden! Bitte versuche es noch einmal!'
    )
  }
}
