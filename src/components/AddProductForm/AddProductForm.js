import React, { useState } from 'react'
import styled from 'styled-components'
import UploadProductsToFirestore from '../../services/UploadProductsToFirestore'
import useForm from '../../services/lib/useForm'
import Button from '../ui/Button/Button'
import Modal from '../ui/Modal/Modal'
import TextAreaField from '../ui/TextAreaField/TextAreaField'
import TextInputField from '../ui/TextInputField/TextInputField'
import validateAddProduct from './AddProductFormValidation.js'
import SpinningLogoIcon from '../ui/SpinningLoadIcon/SpinningLoadIcon'
import redcross from '../../icons/redcross.svg'
import UploadImageToStorage from '../../services/UploadImageToStorage'
import DeleteImageFromStorage from '../../services/DeleteImageFromStorage'

export default function AddProductForm({ user }) {
  const [values, inputErrors, handleChange, handleSubmit, setValues] = useForm(
    addNewProduct,
    validateAddProduct
  )
  const [feedback, setFeedback] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [imageAsFile, setImageAsFile] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [imagePreviewIsLoading, setImagePreviewIsLoading] = useState(false)

  const disableButton =
    !values.name ||
    !values.description ||
    !values.dailyRate ||
    !values.weeklyRate ||
    !values.phone ||
    !values.location ||
    !values.ownerNotes ||
    !imageUrl ||
    Object.keys(inputErrors).length !== 0

  async function uploadImageForPreview(event) {
    event.persist()
    const image = await event.target.files[0]
    UploadImageToStorage(
      setImagePreviewIsLoading,
      image,
      setFeedback,
      setImageUrl,
      setImageAsFile,
      imageUrl
    )
  }

  function deleteImagePreview() {
    DeleteImageFromStorage(imageUrl, setImageUrl, setImageAsFile)
  }

  function cancelForm() {
    setValues({})
    setFeedback('')
    deleteImagePreview()
  }

  function addNewProduct() {
    UploadProductsToFirestore(
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
        {imagePreviewIsLoading ? (
          <div>
            <SpinningLogoIcon />
          </div>
        ) : (
          imageUrl && <StyledImagePreview src={imageUrl} alt="Preview" />
        )}
        {imageAsFile.name && (
          <div className="description">
            <img src={redcross} alt="cancel" onClick={deleteImagePreview} />
            {'  '}
            {imageAsFile.name}
          </div>
        )}
        <StyledImageUpload>
          <input type="file" onChange={uploadImageForPreview} required />
          {imageUrl ? 'Bild ändern' : 'Bild auswählen'}
        </StyledImageUpload>
        {feedback && <StyledFeedback>{feedback}</StyledFeedback>}
        <Button text="Produkt Hinzufügen" disabled={disableButton} />
        <Button text="Cancel" onClick={cancelForm} type="button" />
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
  color: var(--denim);
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  background-color: var(--white);
  border: 1px solid var(--denim);
  padding: 6px 12px;
  display: block;
  cursor: pointer;
  input {
    display: none;
  }
`
