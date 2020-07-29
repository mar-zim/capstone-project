import React, { useContext } from 'react'
import styled from 'styled-components'
import useForm from '../../services/useForm'
import Button from '../Button/Button'
import TextInputField from '../TextInputField/TextInputField'
import validateAddProduct from './AddProductFormValidation.js'
import TextAreaField from '../TextAreaField/TextAreaField'
import { db } from '../../firebase/index'
import loginContext from '../../services/loginContext'

export default function AddProductForm() {
  const { user } = useContext(loginContext)
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    addToDataBase,
    validateAddProduct
  )

  // const disableButton = Object.keys(inputErrors).length !== 0

  function addToDataBase(values) {
    db.collection('products')
      .add({
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
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })
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
        placeholder="Gebühr pro Tag in €"
        name="dailyRate"
        type="number"
        handleChange={handleChange}
        value={values.dailyRate || ''}
        required={true}
        error={inputErrors.dailyRate}
      />
      <TextInputField
        placeholder="Gebühr pro Woche in €"
        name="weeklyRate"
        type="number"
        handleChange={handleChange}
        value={values.weeklyRate || ''}
        required={true}
        error={inputErrors.weeklyRate}
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
      <TextInputField
        placeholder="Notizen Erreichbarkeit"
        name="ownerNotes"
        type="text"
        handleChange={handleChange}
        value={values.ownerNotes || ''}
        required={true}
        error={inputErrors.ownerNotes}
      />

      <Button text="Hinzufügen" />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin: 30px 0;
`
