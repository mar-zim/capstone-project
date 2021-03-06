import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

ContactDetails.propTypes = {
  ownerName: PropTypes.string,
  location: PropTypes.string,
  phone: PropTypes.string,
  details: PropTypes.string,
}

export default function ContactDetails({
  ownerName,
  location,
  phone,
  details,
}) {
  return (
    <>
      <h4>Kontakt</h4>
      <StyledContactBox>
        <span className="text-light">Name:</span>
        <span>{ownerName}</span>
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
