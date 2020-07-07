import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <StyledHeader>
      <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 56px;
  width: 100vw;
  background-color: var(--grey-5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`
