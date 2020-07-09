import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
  return (
    <>
      <h4>Produkttitel</h4>
      <div>Dies ist nur eine Beispiel Seite.</div>
      <Link to="/">zurück</Link>
    </>
  )
}
