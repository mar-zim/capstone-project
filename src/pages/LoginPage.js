import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import loginContext from '../services/loginContext'
import LoginForm from '../components/auth/LoginForm'

export default function LoginPage() {
  const { user } = useContext(loginContext)

  return (
    <>
      {user ? (
        <div>
          <h4>Hallo {user.displayName}!</h4>
          <div>
            Du bist bereits eingeloggt! <Link to="/home">Hier</Link> gehts zur
            Startseite.
          </div>
        </div>
      ) : (
        <div>
          <h2>Willkommen!</h2>
          <LoginForm />
          <div>
            Noch keine Zugangsdaten? Dann{' '}
            <Link to="/register">hier registrieren</Link>.
          </div>
        </div>
      )}
    </>
  )
}
