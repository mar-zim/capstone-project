import React from 'react'
import styled from 'styled-components'
import useForm from '../../services/useForm'
import Button from '../Button/Button'
import TextInputField from '../TextInputField/TextInputField'
import validateAddProduct from './AddProductFormValidation.js'
import TextAreaField from '../TextAreaField/TextAreaField'

export default function AddProductForm() {
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    handleValuesFunction,
    validateAddProduct
  )

  // const disableButton = Object.keys(inputErrors).length !== 0

  async function handleValuesFunction(values) {
    // try {
    //   await firebaseApp.signInWithEmailAndPassword(
    //     values.email,
    //     values.password
    //   )
    //   return history.push('/home')
    // } catch (error) {
    //   error.code === 'auth/wrong-password' ||
    //   error.code === 'auth/user-not-found'
    //     ? setLoginFeedback(
    //         'Deine E-Mail oder dein Passwort ist nicht korrekt. Bitte versuche es noch einmal!'
    //       )
    //     : setLoginFeedback(
    //         'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
    //       )
    // }
  }
  return (
    <>
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
        <Button text="Hinzufügen" />
      </StyledForm>
    </>
  )
}

const StyledForm = styled.form`
  margin: 30px 0;
`
