import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import useForm from '../../services/useForm'

export default function Login() {
  const { handleChange, handleSubmit, values } = useForm(loginWithFirebase)
  const history = useHistory()

  async function loginWithFirebase(values) {
    await firebaseApp.signInWithEmailAndPassword(values.email, values.password)
    return history.push('/home')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <StyledLabel htmlFor="email">E-Mail</StyledLabel>
          <StyledInput
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email || ''}
            required
          />
        </div>
        <div>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password || ''}
            required
          />
        </div>
        <div>
          <StyledButton type="submit">Login</StyledButton>
        </div>
      </form>
    </div>
  )
}

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid gray;
  border-radius: 3px;
  width: 40%;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0 0.5em;
`

const StyledButton = styled.button`
  display: block;
  margin: 0.5em;
`
