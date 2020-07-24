import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebaseApp from '../../../firebase'
import useForm from '../../../services/useForm'
import Button from '../../Button/Button'
import TextInputField from '../../TextInputField/TextInputField'

export default function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false)
  const { values, handleChange, handleSubmit } = useForm(registerToFirebase)

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
    <>
      {isRegistered ? (
        <p>
          Du bist angemeldet und kannst jetzt loslegen!{' '}
          <Link to="/home">Home</Link>
        </p>
      ) : (
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
      )}
    </>
  )
}
