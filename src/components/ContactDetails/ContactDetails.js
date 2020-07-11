import React from 'react'
import styled from 'styled-components'

export default function ContactDetails({
  firstname,
  location,
  phone,
  details,
}) {
  return (
    <>
      <h4>Kontakt</h4>
      <StyledContactBox>
        <span className="text-light">Name:</span>
        <span>{firstname}</span>
        <span className="text-light">Ort:</span>
        <span>{location}</span>
        <span className="text-light">Kontakt:</span>
        <span>{`Tel: ${phone}`}</span>
        <span className="text-light">Details:</span>
        <span>{details}</span>
      </StyledContactBox>
    </>
  )
}

export const StyledContactBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  grid-row-gap: 5px;
`
