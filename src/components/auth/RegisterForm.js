import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import useForm from '../../services/useForm'
import Button from '../Button/Button'

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
        <p>
          Du bist angemeldet und kannst jetzt loslegen!{' '}
          <Link to="home">Home</Link>
        </p>
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
          <Button text="registrieren" />
        </form>
      )}
      <div>
        Zurück zum <Link to="/welcome">Login</Link>.
      </div>
    </div>
  )
}

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 10px 0;
  border: 1px solid var(--grey-4);
  border-radius: 3px;
  width: 40%;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0;
`
