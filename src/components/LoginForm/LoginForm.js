import React, { useState } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import useForm from '../../services/lib/useForm'
import Button from '../ui/Button/Button'
import TextInputField from '../ui/TextInputField/TextInputField'
import validateLogin from './LoginFormValidation'
import loginWithFirebase from '../../services/auth/LoginWithFirebase'

export default function LoginForm() {
  const [values, inputErrors, handleChange, handleSubmit] = useForm(
    loginUser,
    validateLogin
  )
  const [loginFeedback, setLoginFeedback] = useState('')
  const history = useHistory()
  let { url } = useRouteMatch()

  const disableButton =
    !values.email || !values.password || Object.keys(inputErrors).length !== 0

  function loginUser() {
    loginWithFirebase(values, setLoginFeedback, history)
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
