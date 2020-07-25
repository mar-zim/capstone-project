import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebaseApp from '../../../firebase'
import useForm from '../../../services/useForm'
import Button from '../../Button/Button'
import TextInputField from '../../TextInputField/TextInputField'
import validateRegister from './RegisterFormValidation'

export default function RegisterForm() {
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    registerToFirebase,
    validateRegister
  )

  const disableButton =
    !values.email ||
    !values.password ||
    !values.name ||
    !values.passwordcheck ||
    Object.keys(inputErrors).length !== 0

  const history = useHistory()

  async function registerToFirebase(values) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        values.email,
        values.password
      )
      await newUser.user.updateProfile({
        displayName: values.name,
      })
      goToHome()
      alert('Herzlich Willkommen! Du bist nun registriert!')
    } catch (error) {
      alert('Hier ist etwas schief gelaufen, bitte versuche es noch einmal!')
    }
  }

  return (
    <div>
      <h2>Registrierung</h2>
      <form onSubmit={handleSubmit} noValidate>
        <TextInputField
          label="Dein User-Name"
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name || ''}
          required={true}
          error={inputErrors.name}
        />
        <TextInputField
          label="E-Mail"
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email || ''}
          required={true}
          error={inputErrors.email}
        />
        <TextInputField
          label="Passwort"
          name="password"
          type="password"
          handleChange={handleChange}
          value={values.password || ''}
          required={true}
          error={inputErrors.password}
        />
        <TextInputField
          label="Passwort-Wiederholung"
          name="passwordcheck"
          type="password"
          handleChange={handleChange}
          value={values.passwordcheck || ''}
          required={true}
          error={inputErrors.passwordcheck}
        />
        <Button text="registrieren" disabled={disableButton} />
      </form>
      <div className="caption">
        Zurück zum <Link to="/login">Login</Link>.
      </div>
    </div>
  )

  function goToHome() {
    let path = `/home`
    history.push(path)
  }
}
