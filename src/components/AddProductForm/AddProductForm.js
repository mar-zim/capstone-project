import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../../firebase/index'
import useForm from '../../services/useForm'
import Button from '../Button/Button'
import TextAreaField from '../TextAreaField/TextAreaField'
import TextInputField from '../TextInputField/TextInputField'
import validateAddProduct from './AddProductFormValidation.js'
import Modal from '../Modal/Modal'
import { storage } from '../../firebase/index'

export default function AddProductForm({ user }) {
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    addToDatabase,
    validateAddProduct
  )
  const [feedback, setFeedback] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  // const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState({})
  // const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  console.log(imageAsFile)
  const disableButton =
    !values.name ||
    !values.description ||
    !values.dailyRate ||
    !values.weeklyRate ||
    !values.phone ||
    !values.location ||
    !values.ownerNotes ||
    Object.keys(inputErrors).length !== 0

  async function addToDatabase(values) {
    try {
      console.log('image upload started')
      await storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
      console.log('get Url')
      const firebaseUrl = await storage
        .ref('images')
        .child(imageAsFile.name)
        .getDownloadURL()

      console.log('url fetched')
      // setImageAsUrl((prevObject) => ({
      //   ...prevObject,
      //   imgUrl: firebaseUrl,
      // }))

      console.log(firebaseUrl)

      console.log('start writing in db')
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
      console.log('end writing in db, set modal visible')
      setModalVisible(true)
    } catch (error) {
      setFeedback(
        'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
      )
      console.log(error)
    }
  }

  function handleImageAsFile(event) {
    const image = event.target.files[0]
    setImageAsFile(image)
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
        <input type="file" onChange={handleImageAsFile} />
        <Button text="Hinzufügen" disabled={disableButton} />
        {feedback && <StyledFeedback>{feedback}</StyledFeedback>}
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
