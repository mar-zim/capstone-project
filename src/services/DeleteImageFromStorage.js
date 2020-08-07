import { storage } from '../firebase/index'

export default async function DeleteImageFromStorage(
  imageUrl,
  setImageUrl,
  setImageAsFile
) {
  try {
    const imageRef = storage.refFromURL(imageUrl)
    await imageRef.delete()
    setImageUrl('')
    setImageAsFile({})
  } catch (error) {
    console.log(error.message)
  }
}
