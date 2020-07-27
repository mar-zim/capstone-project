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
  return (
    <>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit} noValidate>
        <TextInputField
          placeholder="E-Mail"
          name="email"
          type="text"
          handleChange={handleChange}
          value={values.email || ''}
          required={true}
          error={inputErrors.email}
        />
        <TextInputField
          placeholder="Passwort"
          name="password"
          type="password"
          handleChange={handleChange}
          value={values.password || ''}
          required={true}
          error={inputErrors.password}
        />
        <Button text="login" disabled={disableButton} />
      </StyledForm>
      {loginFeedback && (
        <StyledLoginFeedback>{loginFeedback}</StyledLoginFeedback>
      )}
      <div className="caption">
        Noch keine Zugangsdaten? Dann hier{' '}
        <Link to={`${url}/register`}>Registrieren</Link> oder erstmal als{' '}
        <Link to="home">Gast</Link> umschauen.
      </div>
    </>
  )
}

const StyledLoginFeedback = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: var(--salmon-pink);
`
const StyledForm = styled.form`
  margin: 30px 0;
`
