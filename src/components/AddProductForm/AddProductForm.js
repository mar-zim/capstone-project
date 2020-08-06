import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../../firebase/index'
import { UploadProductsToFirebase } from '../../services/UploadProductsToFirebase'
import useForm from '../../services/useForm'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import TextAreaField from '../TextAreaField/TextAreaField'
import TextInputField from '../TextInputField/TextInputField'
import validateAddProduct from './AddProductFormValidation.js'

export default function AddProductForm({ user }) {
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    addNewProduct,
    validateAddProduct
  )
  const [feedback, setFeedback] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [imageAsFile, setImageAsFile] = useState({})
  const [imageUrl, setImageUrl] = useState('')

  const disableButton =
    !values.name ||
    !values.description ||
    !values.dailyRate ||
    !values.weeklyRate ||
    !values.phone ||
    !values.location ||
    !values.ownerNotes ||
    !imageAsFile.name ||
    Object.keys(inputErrors).length !== 0

  async function uploadImageForPreview(event) {
    setFeedback('')
    const imageId = uuidv4()
    try {
      const image = await event.target.files[0]
      if (!image.type.includes('image')) {
        setFeedback(
          'Bitte wähle ein Bild in einem gültigen Format (zum Beispiel JPEG oder PNG).'
        )
      }
      setImageAsFile(image)
      await storage.ref(`/images/${imageId}_${image.name}`).put(image)
      const firebaseUrl = await storage
        .ref('images')
        .child(imageId + '_' + image.name)
        .getDownloadURL()
      setImageUrl(firebaseUrl)
    } catch (error) {
      setFeedback(
        'Dein Bild konnte leider nicht hochgeladen werden! Bitte versuche es noch einmal!'
      )
    }
  }

  function addNewProduct() {
    UploadProductsToFirebase(
      values,
      user,
      setFeedback,
      setModalVisible,
      imageUrl
    )
  }

  return (
    <>
      <Modal
        header="Danke!"
        text="Dein Produkt wurde hinzugefügt."
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onCloseModalGoToPath="/home"
      />
      <StyledForm onSubmit={handleSubmit} noValidate>
        <TextInputField
          placeholder="Titel"
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name || ''}
          required={true}
          error={inputErrors.name}
        />
        <TextAreaField
          placeholder="Beschreibung"
          name="description"
          handleChange={handleChange}
          value={values.description || ''}
          required={true}
          error={inputErrors.description}
        />
        <TextInputField
          placeholder="Gebühr"
          name="dailyRate"
          type="text"
          handleChange={handleChange}
          value={values.dailyRate || ''}
          required={true}
          error={inputErrors.dailyRate}
          width={20}
          label="€ pro Tag"
        />
        <TextInputField
          placeholder="Gebühr"
          name="weeklyRate"
          type="text"
          handleChange={handleChange}
          value={values.weeklyRate || ''}
          required={true}
          error={inputErrors.weeklyRate}
          width={20}
          label="€ pro Woche"
        />
        <h3>Kontakt</h3>
        <TextInputField
          placeholder="Telefonnummer"
          name="phone"
          type="tel"
          handleChange={handleChange}
          value={values.phone || ''}
          required={true}
          error={inputErrors.phone}
          width={40}
        />
        <TextInputField
          placeholder="Stadtteil"
          name="location"
          type="text"
          handleChange={handleChange}
          value={values.location || ''}
          required={true}
          error={inputErrors.location}
        />
        <TextAreaField
          placeholder="Wann bist du erreichbar?"
          name="ownerNotes"
          type="text"
          handleChange={handleChange}
          value={values.ownerNotes || ''}
          required={true}
          error={inputErrors.ownerNotes}
          width={55}
        />
        {imageUrl && <StyledImagePreview src={imageUrl} alt="Vorschau lädt" />}
        {imageAsFile.name && (
          <div className="description">{imageAsFile.name}</div>
        )}
        <StyledImageUpload>
          <input type="file" onChange={uploadImageForPreview} required />
          {imageAsFile.name ? 'Bild ändern' : 'Bild auswählen'}
        </StyledImageUpload>
        {feedback && <StyledFeedback>{feedback}</StyledFeedback>}

        <Button text="Hinzufügen" disabled={disableButton} />
      </StyledForm>
    </>
  )
}

const StyledFeedback = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: var(--salmon-pink);
`

const StyledForm = styled.form`
  margin: 30px 0;
`

const StyledImagePreview = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 5px;
  object-fit: cover;
  display: block;
  margin-bottom: 5px;
`

const StyledImageUpload = styled.label`
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: var(--denim);
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  color: var(--white);
  padding: 6px 12px;
  display: block;
  cursor: pointer;
  input {
    display: none;
  }
`
