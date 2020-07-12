import React from 'react'
import styled from 'styled-components'

export default function Button({ onClick, text }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

const StyledButton = styled.button`
  min-width: 95px;
  min-height: 25px;
  border-radius: 5px;
  border: 0;
  background-color: var(--denim);
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align: center;
  color: var(--white);
  cursor: pointer;
`
