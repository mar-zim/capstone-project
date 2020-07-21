import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import firebaseApp from '../../firebase'

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false)

  const userName = useRef(null)
  const userEmail = useRef(null)
  const userPassword = useRef(null)

  async function registerToFirebase(name, email, password) {
    const newUser = await firebaseApp.createUserWithEmailAndPassword(
      email,
      password
    )

    await newUser.user.updateProfile({
      displayName: name,
    })

    return setIsRegistered(true)
  }
  //try catch
  return (
    <div>
      {isRegistered ? (
        <p>You are registered!</p>
      ) : (
        <form
          onSubmit={(event) => (
            event.preventDefault(),
            registerToFirebase(
              userName.current.value,
              userEmail.current.value,
              userPassword.current.value
            )
          )}
        >
          <div>
            <StyledLabel htmlFor="user-name">Username</StyledLabel>
            <StyledInput
              htmlId="user-name"
              name="user-name"
              type="text"
              ref={userName}
            />
          </div>
          <div>
            <StyledLabel htmlFor="user-email">E-Mail</StyledLabel>
            <StyledInput
              htmlId="user-email"
              name="user-email"
              type="text"
              ref={userEmail}
            />
          </div>
          <div>
            <StyledLabel htmlFor="user-password">Password</StyledLabel>
            <StyledInput
              htmlId="user-password"
              name="user-password"
              type="password"
              ref={userPassword}
            />
          </div>
          <div>
            <StyledButton type="submit">Create New User</StyledButton>
          </div>
        </form>
      )}
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
