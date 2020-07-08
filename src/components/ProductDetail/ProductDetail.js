import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
  return (
    <>
      <h4>Produkttitel</h4>
      <p>Dies ist nur eine Beispiel Seite.</p>
      <Link to="/">zurück</Link>
    </>
  )
}
