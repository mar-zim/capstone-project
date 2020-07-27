import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  const history = useHistory()

  return (
    <StyledHeader>
      <StyledLogo
        src={process.env.PUBLIC_URL + '/logo.svg'}
        alt="logo"
        onClick={goToHome}
      />
    </StyledHeader>
  )

  function goToHome() {
    let path = `/home`
    history.push(path)
  }
}

const StyledHeader = styled.header`
  background-color: var(--grey-5);
  display: grid;
  align-items: center;
  justify-items: center;
`

const StyledLogo = styled.img`
  max-width: 80vw;
  cursor: pointer;
`
