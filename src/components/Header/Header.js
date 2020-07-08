import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: var(--grey-5);
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`

const StyledLogo = styled.img`
  max-width: 90vw;
`
