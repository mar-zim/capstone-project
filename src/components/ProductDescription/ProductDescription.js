import React from 'react'
import DividerLine from '../DividerLine/DividerLine'

export default function ProductDetail({ description }) {
  return (
    <>
      <h4>Beschreibung</h4>
      <div>{description}</div>
      <DividerLine />
    </>
  )
}
