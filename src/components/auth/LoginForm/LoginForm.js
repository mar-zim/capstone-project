import React from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import firebaseApp from '../../../firebase'
import useForm from '../../../services/useForm'
import Button from '../../Button/Button'
import TextInputField from '../../TextInputField/TextInputField'
import validateLogin from './LoginFormValidationRules'

export default function LoginForm() {
  const [values, inputErrors, handleChange, handleSubmit, handleBlur] = useForm(
    loginWithFirebase,
    validateLogin
  )
  const history = useHistory()
  let { url } = useRouteMatch()

  async function loginWithFirebase(values) {
    try {
      await firebaseApp.signInWithEmailAndPassword(
        values.email,
        values.password
      )
      return history.push('/home')
    } catch (error) {
      error.code === 'auth/wrong-password' ||
      error.code === 'auth/user-not-found'
        ? alert(
            'Deine E-Mail oder dein Passwort ist nicht korrekt. Bitte versuche es noch einmal!'
          )
        : alert(
            'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
          )
    }
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <TextInputField
          label="E-Mail"
          name="email"
          type="text"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.email || ''}
          required={true}
          error={inputErrors.email}
        />
        <TextInputField
          label="Passwort"
          name="password"
          type="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.password || ''}
          required={true}
          error={inputErrors.password}
        />
        <Button
          text="login"
          disabled={
            Object.keys(inputErrors).length !== 0 ||
            Object.keys(values).length === 0
          }
        />
      </form>
      <div className="caption">
        Noch keine Zugangsdaten? Dann hier{' '}
        <Link to={`${url}/register`}>Registrieren</Link>.
      </div>
      <div className="caption">
        Oder erstmal als <Link to="home">Gast</Link> umschauen.
      </div>
    </>
  )
}
