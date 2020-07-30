import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { db } from '../../firebase/index'
import loginContext from '../../services/loginContext'
import useForm from '../../services/useForm'
import Button from '../Button/Button'
import TextAreaField from '../TextAreaField/TextAreaField'
import TextInputField from '../TextInputField/TextInputField'
import validateAddProduct from './AddProductFormValidation.js'

export default function AddProductForm() {
  const { user } = useContext(loginContext)
  const history = useHistory()
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    addToDataBase,
    validateAddProduct
  )
  const [feedback, setFeedback] = useState('')

  const disableButton =
    !values.name ||
    !values.description ||
    !values.dailyRate ||
    !values.weeklyRate ||
    !values.phone ||
    !values.location ||
    !values.ownerNotes ||
    Object.keys(inputErrors).length !== 0

  async function addToDataBase(values) {
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
      })
      // Hier folgt noch ein schöneres Modal
      alert('Dein Produkt wurde hinzugefügt!')
      return history.push('/home')
    } catch (error) {
      console.log(error)
      setFeedback(
        'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
      )
    }
    console.log(values)
  }

  return (
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
        type="textarea"
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

      <Button text="Hinzufügen" disabled={disableButton} />
      {feedback && <StyledFeedback>{feedback}</StyledFeedback>}
    </StyledForm>
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
