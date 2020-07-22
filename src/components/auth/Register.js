import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import useForm from '../../services/useForm'

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false)
  const { handleChange, handleSubmit, values } = useForm(registerToFirebase)

  async function registerToFirebase(values) {
    const newUser = await firebaseApp.createUserWithEmailAndPassword(
      values.email,
      values.password
    )
    await newUser.user.updateProfile({
      displayName: values.name,
    })
    return setIsRegistered(true)
  }

  return (
    <div>
      {isRegistered ? (
        <p>Du bist angemeldet und kannst dich jetzt einloggen!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <StyledLabel htmlFor="name">Username</StyledLabel>
            <StyledInput
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name || ''}
              required
            />
          </div>
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
            <StyledButton type="submit">Create New User</StyledButton>
          </div>
        </form>
      )}
      <div>
        Zurück zum <Link to="/">Login</Link>.
      </div>
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
