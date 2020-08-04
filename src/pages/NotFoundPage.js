import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <h3>404 - Oops, hier ist wohl etwas schief gelaufen!</h3>
      <Link to="/">Zurück zur Startseite</Link>
    </div>
  )
}
