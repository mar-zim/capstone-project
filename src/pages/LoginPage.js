import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/auth/Login'

export default function LoginPage() {
  return (
    <>
      <Login />
      <div>
        Noch keine Zugangsdaten? Dann{' '}
        <Link to="/register">hier registrieren</Link>.
      </div>
    </>
  )
}
