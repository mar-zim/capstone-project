import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebaseApp from '../../../firebase'
import useForm from '../../../services/useForm'
import Button from '../../Button/Button'
import TextInputField from '../../TextInputField/TextInputField'

export default function RegisterForm() {
  const history = useHistory()
  const { values, handleChange, handleSubmit } = useForm(registerToFirebase)

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
      console.log(error.message)
      alert('Hier ist etwas schief gelaufen, bitte versuche es noch einmal!')
    }
  }

  return (
    <div>
      <h2>Registrierung</h2>
      <form onSubmit={handleSubmit}>
        <TextInputField
          label="Dein User-Name"
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name || ''}
          required={true}
        />
        <TextInputField
          label="E-Mail"
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email || ''}
          required={true}
        />
        <TextInputField
          label="Passwort"
          name="password"
          type="password"
          handleChange={handleChange}
          value={values.password || ''}
          required={true}
        />
        <Button text="registrieren" />
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
