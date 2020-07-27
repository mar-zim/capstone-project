import React, { useState } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import firebaseApp from '../../../firebase'
import useForm from '../../../services/useForm'
import Button from '../../Button/Button'
import TextInputField from '../../TextInputField/TextInputField'
import validateLogin from './LoginFormValidation'

export default function LoginForm() {
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    loginWithFirebase,
    validateLogin
  )
  const [loginFeedback, setLoginFeedback] = useState('')
  const history = useHistory()
  let { url } = useRouteMatch()

  const disableButton =
    !values.email || !values.password || Object.keys(inputErrors).length !== 0

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
        ? setLoginFeedback(
            'Deine E-Mail oder dein Passwort ist nicht korrekt. Bitte versuche es noch einmal!'
          )
        : setLoginFeedback(
            'Hier ist etwas schief gelaufen, bitte versuche es noch einmal!'
          )
    }
  }
  console.log('LoginFeedback:' + loginFeedback)
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
        <TextInputField
          label="E-Mail"
          name="email"
          type="text"
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
        <Button text="login" disabled={disableButton} />
        {loginFeedback && (
          <StyledLoginFeedback>{loginFeedback}</StyledLoginFeedback>
        )}
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

const StyledLoginFeedback = styled.div`
  border: 2px solid var(--salmon-pink);
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 10px;
  font-size: 12px;
  background: var(--grey-5);
`
