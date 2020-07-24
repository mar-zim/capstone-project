import React from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import firebaseApp from '../../../firebase'
import useForm from '../../../services/useForm'
import Button from '../../Button/Button'
import TextInputField from '../../TextInputField/TextInputField'

export default function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(loginWithFirebase)
  const history = useHistory()
  let { url } = useRouteMatch()

  async function loginWithFirebase(values) {
    await firebaseApp.signInWithEmailAndPassword(values.email, values.password)
    return history.push('/home')
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <Button text="login" />
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
