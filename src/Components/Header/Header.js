import React from 'react'
import styled from 'styled-components'
import shharelogo from '../../Assets/shharelogo.svg'

export default function Header() {
  return (
    <StyledHeader>
      <img src={shharelogo} alt="logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 56px;
  background-color: var(--grey-5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`
